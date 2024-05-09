from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

# Função para conectar ao banco de dados
def connect_db():
    return sqlite3.connect('dados.db')

# Função para criar a tabela
def create_table():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            genero TEXT NOT NULL,
            email TEXT NOT NULL,
            telefone TEXT,
            endereco TEXT NOT NULL,
            senha TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Rota para a página de cadastro
@app.route('/')
def cadastro():
    return render_template('cadastro.html')

# Rota para lidar com o envio do formulário
@app.route('/cadastrar', methods=['POST'])
def cadastrar():
    if request.method == 'POST':
        nome = request.form['nome']
        genero = request.form['genero']
        email = request.form['email']
        telefone = request.form['telefone']
        endereco = request.form['endereco']
        senha = request.form['senha']
        
        # Conecta ao banco de dados
        conn = connect_db()
        cursor = conn.cursor()
        
        # Insere os dados no banco de dados
        cursor.execute("INSERT INTO usuarios (nome, genero, email, telefone, endereco, senha) VALUES (?, ?, ?, ?, ?, ?)",
                       (nome, genero, email, telefone, endereco, senha))
        
        # Commit e fecha a conexão com o banco de dados
        conn.commit()
        conn.close()
        
        return 'Cadastro realizado com sucesso!'

if __name__ == '__main__':
    create_table()
    app.run(debug=True)
