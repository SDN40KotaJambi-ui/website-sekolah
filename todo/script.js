// To-Do List App with Local Storage

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.currentSort = 'newest';
        this.initElements();
        this.loadFromStorage();
        this.setupEventListeners();
        this.render();
    }

    // Initialize DOM elements
    initElements() {
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.emptyState = document.getElementById('emptyState');
        this.totalTasksEl = document.getElementById('totalTasks');
        this.activeTasksEl = document.getElementById('activeTasks');
        this.completedTasksEl = document.getElementById('completedTasks');
        this.clearBtn = document.getElementById('clearBtn');
        this.exportBtn = document.getElementById('exportBtn');
        this.importBtn = document.getElementById('importBtn');
        this.importFile = document.getElementById('importFile');
        this.notificationEl = document.getElementById('notification');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.sortSelect = document.getElementById('sortSelect');
    }

    // Setup event listeners
    setupEventListeners() {
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTodo();
            }
        });
        this.clearBtn.addEventListener('click', () => this.clearCompleted());
        this.exportBtn.addEventListener('click', () => this.exportData());
        this.importBtn.addEventListener('click', () => this.importFile.click());
        this.importFile.addEventListener('change', (e) => this.importData(e));
        this.sortSelect.addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.render();
        });

        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                e.target.closest('.filter-btn').classList.add('active');
                this.currentFilter = e.target.closest('.filter-btn').dataset.filter;
                this.render();
            });
        });
    }

    // Add new todo
    addTodo() {
        const text = this.todoInput.value.trim();

        if (text === '') {
            this.showNotification('Silakan masukkan tugas!', 'error');
            return;
        }

        if (text.length > 200) {
            this.showNotification('Tugas terlalu panjang (maksimal 200 karakter)', 'error');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.todos.unshift(todo);
        this.todoInput.value = '';
        this.saveToStorage();
        this.render();
        this.showNotification('✓ Tugas ditambahkan', 'success');
        this.todoInput.focus();
    }

    // Toggle todo completion
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.render();
            this.showNotification(
                todo.completed ? '✓ Tugas selesai!' : 'Tugas dikembalikan ke aktif',
                'success'
            );
        }
    }

    // Delete todo
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveToStorage();
        this.render();
        this.showNotification('🗑️ Tugas dihapus', 'info');
    }

    // Edit todo
    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            const newText = prompt('Edit tugas:', todo.text);
            if (newText !== null && newText.trim() !== '') {
                if (newText.length > 200) {
                    this.showNotification('Tugas terlalu panjang', 'error');
                    return;
                }
                todo.text = newText.trim();
                this.saveToStorage();
                this.render();
                this.showNotification('✏️ Tugas diperbarui', 'success');
            }
        }
    }

    // Clear completed todos
    clearCompleted() {
        const completedCount = this.todos.filter(t => t.completed).length;
        if (completedCount === 0) {
            this.showNotification('Tidak ada tugas selesai untuk dihapus', 'info');
            return;
        }

        if (confirm(`Hapus ${completedCount} tugas selesai?`)) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveToStorage();
            this.render();
            this.showNotification(`🗑️ ${completedCount} tugas dihapus`, 'success');
        }
    }

    // Filter todos
    getFilteredTodos() {
        let filtered = this.todos;

        if (this.currentFilter === 'active') {
            filtered = filtered.filter(t => !t.completed);
        } else if (this.currentFilter === 'completed') {
            filtered = filtered.filter(t => t.completed);
        }

        return this.sortTodos(filtered);
    }

    // Sort todos
    sortTodos(todos) {
        const sorted = [...todos];

        switch (this.currentSort) {
            case 'oldest':
                return sorted.reverse();
            case 'completed':
                return sorted.sort((a, b) => {
                    if (a.completed === b.completed) return 0;
                    return a.completed ? 1 : -1;
                });
            case 'newest':
            default:
                return sorted;
        }
    }

    // Update stats
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const active = total - completed;

        this.totalTasksEl.textContent = total;
        this.activeTasksEl.textContent = active;
        this.completedTasksEl.textContent = completed;
    }

    // Render todos
    render() {
        const filteredTodos = this.getFilteredTodos();
        this.updateStats();

        if (filteredTodos.length === 0) {
            this.todoList.style.display = 'none';
            this.emptyState.style.display = 'block';
            return;
        }

        this.todoList.style.display = 'flex';
        this.emptyState.style.display = 'none';
        this.todoList.innerHTML = filteredTodos.map(todo => this.createTodoElement(todo)).join('');

        // Add event listeners to checkboxes and buttons
        this.todoList.querySelectorAll('.todo-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.toggleTodo(parseInt(e.target.dataset.id));
            });
        });

        this.todoList.querySelectorAll('.todo-btn-delete').forEach(btn => {
            btn.addEventListener('click', () => {
                this.deleteTodo(parseInt(btn.dataset.id));
            });
        });

        this.todoList.querySelectorAll('.todo-btn-edit').forEach(btn => {
            btn.addEventListener('click', () => {
                this.editTodo(parseInt(btn.dataset.id));
            });
        });
    }

    // Create todo element
    createTodoElement(todo) {
        const date = new Date(todo.createdAt);
        const formattedDate = date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `
            <div class="todo-item ${todo.completed ? 'completed' : ''}">
                <input 
                    type="checkbox" 
                    class="todo-checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    data-id="${todo.id}"
                >
                <div class="todo-content">
                    <p class="todo-text">${this.escapeHtml(todo.text)}</p>
                    <p class="todo-date">${formattedDate}</p>
                </div>
                <div class="todo-actions">
                    <button class="todo-btn todo-btn-edit" data-id="${todo.id}" title="Edit">✏️</button>
                    <button class="todo-btn todo-btn-delete" data-id="${todo.id}" title="Hapus">🗑️</button>
                </div>
            </div>
        `;
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Save to local storage
    saveToStorage() {
        try {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        } catch (error) {
            this.showNotification('Gagal menyimpan data', 'error');
            console.error('Storage error:', error);
        }
    }

    // Load from local storage
    loadFromStorage() {
        try {
            const stored = localStorage.getItem('todos');
            if (stored) {
                this.todos = JSON.parse(stored);
            }
        } catch (error) {
            this.showNotification('Gagal memuat data', 'error');
            console.error('Storage error:', error);
        }
    }

    // Export data as JSON
    exportData() {
        try {
            const dataStr = JSON.stringify(this.todos, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `todos_${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            URL.revokeObjectURL(url);
            this.showNotification('💾 Data diekspor', 'success');
        } catch (error) {
            this.showNotification('Gagal mengekspor data', 'error');
            console.error('Export error:', error);
        }
    }

    // Import data from JSON
    importData(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target.result);
                if (!Array.isArray(imported)) {
                    throw new Error('Format tidak valid');
                }

                // Validate data structure
                const isValid = imported.every(item => 
                    item.id && item.text && typeof item.completed === 'boolean'
                );

                if (!isValid) {
                    throw new Error('Format data tidak valid');
                }

                if (confirm('Ini akan mengganti data yang ada. Lanjutkan?')) {
                    this.todos = imported;
                    this.currentFilter = 'all';
                    this.currentSort = 'newest';
                    this.saveToStorage();
                    this.render();
                    this.showNotification('📥 Data diimpor berhasil', 'success');
                }
            } catch (error) {
                this.showNotification('Gagal mengimpor file: ' + error.message, 'error');
                console.error('Import error:', error);
            }
        };
        reader.readAsText(file);
        this.importFile.value = '';
    }

    // Show notification
    showNotification(message, type = 'info') {
        this.notificationEl.textContent = message;
        this.notificationEl.className = `notification show ${type}`;

        setTimeout(() => {
            this.notificationEl.classList.remove('show');
        }, 3000);
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});