class Itens {

    constructor() {
        this.id = 0;
        this.arrayItens = [];
    }

    salvar() {
        let item = this.lerDados();

        if(this.validaCampos(item)){
            this.adicionar(item);
        }

        this.listaTabela();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayItens.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_item = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_delet =  tr.insertCell();

            td_id.innertext = this.arrayItens[i].id;
            td_item.innertext = this.arrayItens[i].nomeItem;
            td_valor.innertext = this.arrayItens[i].quantidadeItem;
        }
    }

    adicionar(item){
        this.arrayItens.push(item);
        this.id ++;
    }

    lerDados(){
        let item = {}

            item.id = this.id;
            item.nomeItem = document.getElementById('item').value;
            item.quantidadeItem = document.getElementById('quantidade').value;

        return item;
    }

    validaCampos(item){
        let msg = '';

        if(item.nomeItem == ''){
            msg += ' - Informe o ITEM \n';
        }

        if(item.quantidadeItem == ''){
            msg += ' - Informe a quantidade de ITENS \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }

    excluir() {
        alert('Item deletado!');
    }
}

var itens = new Itens();