import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import {App} from './App';


createServer({  //criação de um BDD para armazenar dados 
  models: {
    transaction:Model,
  },

  seeds(server) { //utilizamos o seeds para inserir dados já pré-cadastrado em nosso banco de dados
    server.db.loadData({
      transactions:[ //necessário por no o MODEL no plural por se tratar de uma tabela já pré preenchida
        {
          id: '1',
          title:'Free website',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: '2',
          title:'Credores',
          type: 'withdrawal',
          category: 'Dívidas',
          amount: 2500,
          createdAt: new Date('2025-02-14 11:00:00'),
        },
     ],
   })
  },
  
  routes() {
    this.namespace = 'api';
    
    this.get('/transactions', () => {
      return this.schema.all('transaction') //criação do banco de dados
    })

    this.post('transactions', (schema, request) => { //recarrega a página e armazena as informações da api
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
  