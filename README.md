# <p align = "center"> Projeto REPOPROVAS </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-MARCUS_VINICIUS-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/MARCUS_VINICIUS/projeto20-repoprovas?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Este um projeto de uma api pública para criar um repoítório de provas feitas.

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- Prisma
- Faker

***

## :rocket: Rotas

```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
}
```
    
```yml 
POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```
    
```yml 
GET /find_by_disciplines (autenticada)
    - Rota para listar todas as provas por disciplina
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /find_by_teachers (autenticada)
    - Rota para listar todas as provas por professores
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
POST /insert/test (autenticada)
    - Rota para atualizar um usuário pelo id
    - Para funcionar, deve haver um professor ministrando a disciplina gerada e uma categoria específica cadastrada
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "name": "Lorem ipsum",
        "pdfUrl": "https://loremipsun.com",
        "categoryId": 1,
        "disciplineId": 3,
        "teacherId": 1
    }
```
 
***

## 🏁 Rodando a aplicação

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/marcus-souza-soares/projeto20-repoprovas.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm start
```

Importe o arquivo "thunder-collection_repoprovas" no thunder client, para ver as rotas detalhadamente.

:stop_sign: Se quiser rodar um servidor na sua própria máquina, crie um arquivo ".env" na raiz do repositório de acordo com o ".env-exemple"
