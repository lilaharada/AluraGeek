let produtos = [
    {
        id: 0,
        produto: "Atlas Galáctico Star Wars",
        valor: 90.0,
        imagem: "https://m.media-amazon.com/images/I/71a-l3CBX9S._SL1000_.jpg"
    },
    {
        id: 1,
        produto: "Boneco Darth Vader",
        valor: 150.0,
        imagem: "https://m.media-amazon.com/images/I/71rlICGoXyL._AC_SL1500_.jpg"
    },
    {
        id: 2,
        produto: "Boneco Stormtrooper",
        valor: 120.0,
        imagem: "https://m.media-amazon.com/images/I/51RPwUuWHoL._AC_SL1000_.jpg"
    },
    {
        id: 3,
        produto: "Boneco Baby Yoda",
        valor: 270.0,
        imagem: "https://m.media-amazon.com/images/I/71X2u76uX3L._AC_SL1500_.jpg"
    },
    {
        id: 4,
        produto: "Caneca Darth Vader",
        valor: 50.0,
        imagem: "https://m.media-amazon.com/images/I/41f3dT0nzLL._AC_.jpg"
    },
    {
        id: 5,
        produto: "Camiseta Star Wars",
        valor: 160.0,
        imagem: "https://m.media-amazon.com/images/I/61Rs9mTfFnL._AC_SX522_.jpg"
    },
    {
        id: 6,
        produto: "Almofada Darth Vader",
        valor: 60.0,
        imagem: "https://m.media-amazon.com/images/I/619l7JqPxAL._AC_SL1000_.jpg"
    },
    {
        id: 7,
        produto: "Lego Set Star Wars",
        valor: 590.0,
        imagem: "https://m.media-amazon.com/images/I/81jbkbN83BL._AC_SL1500_.jpg"
    },
    {
        id: 8,
        produto: "Luminária Darth Vader", 
        valor: 70.0,
        imagem: "https://m.media-amazon.com/images/I/810TW9rENNL._AC_SL1500_.jpg"
    },
];


function lerProdutos() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    produtos.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${produto.imagem}" alt="Imagen do produto">
            <div class="card-container--info">
                <p>${produto.produto}</p>
                <div class="card-container--value">
                    <p>R$ ${produto.valor.toFixed(2)}</p>
                    <img class="excluir" src="assets/excluir.png" alt="Ícone do Lixo" onclick="deleteProduto(${produto.id})">
                    <img class="editar" src="assets/editar.png" alt="Ícone de Edição" onclick="updateProduto(${produto.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

// Para adicionar um novo produto
function createProduto() {
    const form = document.getElementById("form-produto");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const valor = parseFloat(document.getElementById("valor").value);
        const imagem = document.getElementById("imagem").value;
        if (nome && valor && imagem) {
            const novoProduto = {
                id: produtos.length,
                imagem,
                produto: nome,
                valor,
            };
            produtos.push(novoProduto);
            lerProdutos();
            form.reset();
        } else {
            alert("Por favor, preencha todos os campos!");
        }
    });
}

// Para excluir um produto
function deleteProduto(id) {
    if (confirm("Você tem certeza que deseja excluir o produto selecionado?")) {
        produtos = produtos.filter((produto) => produto.id !== id);
        lerProdutos();
        if (produtos.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

// Para atualizar o produto adicionado
function updateProduto(id) {
    const produto = produtos.find((produto) => produto.id === id);
    if (produto) {
        const nome = prompt("Novo nome do produto:");
        const valor = parseFloat(prompt("Novo valor do produto:"));
        const imagem = prompt("Nova imagem do produto:");
        if (nome && valor && imagem) {
            produto.produto = nome;
            produto.valor = valor;
            produto.imagem = imagem;
            lerProdutos();
            alert("Produto foi atualizado com sucesso!");
        } else {
            alert("Produto não encontrado!");
        }
    }
}

// Inicializar a leitura dos produtos
lerProdutos();

// Inicializar a criação de produtos
createProduto();