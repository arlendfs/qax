
const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 3,
        nome: 'Leia Organa',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 5,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 6,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        nome: 'R2-D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        nome: 'C-3PO',
        avatar: 'images/c3po.png'
    },
]

const App =  new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Arlen',
        characters: LIST,
        searchName: '',

    },
    methods: {
        like(userName)
        {
            alert(`O ${userName} recebeu um like!`);
        },
        searchTerm()
        {
            if (this.searchName === '') {
                alert('Digite um nome para buscar!');
                return;
            }

            const list = this.characters = LIST;

            const result = list.filter(function(item) {
                return item.nome.toLowerCase().includes(this.searchName.toLowerCase());
            }, this);

            this.characters = result;

            if (result.length === 0) {
                alert('Nenhum personagem encontrado!');
                this.characters = LIST;
            }
        },
        remove(id)
        {
            const list = this.characters;
            const result = list.filter(function(item) {
                return item.id !== id;
            }
            );
            this.characters = result;
        },
    }
})
