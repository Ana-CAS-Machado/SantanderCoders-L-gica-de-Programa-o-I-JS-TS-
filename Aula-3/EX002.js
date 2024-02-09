const agendaDeContatos = [];
function adicionarContato(nome, telefone, email) {
    const contato = {
        nome: nome,
        telefone: telefone,
        email: email
    };
    agendaDeContatos.push(contato);
}
function mostrarContatos() {
    console.log("Contatos na agenda:");
    agendaDeContatos.forEach(contato => {
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
}
adicionarContato("João", "123456789", "joao@example.com");
adicionarContato("Maria", "987654321", "maria@example.com");
mostrarContatos();
