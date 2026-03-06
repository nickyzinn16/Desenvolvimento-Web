const event= {
  title: 'Conferência Web',
  date: new Date('2026-05-20'),
  local: 'Sºao Vicente',
  toJSON() {
    return {
      title: this.title,
      date: this.date.toLocaleDateString('pt-BR'),
      local: this.local
    };
  }
};
console.log(JSON.stringify(event, null, 2));
