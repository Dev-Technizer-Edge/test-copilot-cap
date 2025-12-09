/**
 * Task model
 * Defines the structure and validation for task data
 */

class Task {
  constructor(data) {
    this.id = data.id || null;
    this.title = data.title || '';
    this.description = data.description || '';
    this.completed = data.completed || false;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  // Validate task data
  validate() {
    const errors = [];

    if (!this.title || this.title.trim().length === 0) {
      errors.push('Title is required');
    }

    if (typeof this.completed !== 'boolean') {
      errors.push('Completed must be a boolean');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  // Convert to plain object
  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      completed: this.completed,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

module.exports = Task;
