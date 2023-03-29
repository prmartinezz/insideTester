const axios = require("axios");

const urlAPI = "https://api-deslocamento.herokuapp.com";


async function criarCliente(cliente) {
  const response = await axios.post(`${urlAPI}/api/v1/Cliente`,cliente);
    const { data } = response;
      console.log(data);
};

async function obterClientes() {
  const response = await axios.get(`${urlAPI}/api/v1/Cliente`);
    const { data } = response;
      console.log(data);
};

async function atualizarCliente(id, cliente) {
  const response = await axios.put(`${urlAPI}/api/v1/Cliente/${id}`, cliente);
    const { data } = response;
      console.log(data);
};

async function criarCondutor(condutor) {
  const response = await axios.post(`${urlAPI}/api/v1/Condutor`, condutor);
    const { data } = response;
      console.log(data);
};

async function obterCondutores() {
  const response = await axios.get(`${urlAPI}/api/v1/Condutor`);
    const { data } = response;
      console.log(data);
};

async function atualizarCondutor(id, condutor) {
  const response = await axios.put(`${urlAPI}/api/v1/Condutor/${id}`, condutor);
    const { data } = response;
      console.log(data);
};

async function criarVeiculo(veiculo) {
  const response = await axios.post(`${urlAPI}/api/v1/Veiculo`, veiculo);
    const { data } = response;
      console.log(data);
};

async function obterVeiculos() {
  const response = await axios.get(`${urlAPI}/api/v1/Veiculo`);
    const { data } = response;
      console.log(data);
};

async function atualizarVeiculo(id, veiculo) {
  const response = await axios.put(`${urlAPI}/api/v1/Veiculo/${id}`, veiculo);
    const { data } = response;
      console.log(data);
};

const cliente = { 
                 numeroDocumento: "123456-7", 
                 tipoDocumento: "RG", 
                 nome: "Teste",
                 logradouro: "Casa",
                 numero: "10",
                 bairro: "Centro",
                 cidade: "Toledo",
                 uf: "PR" };

criarCliente(cliente);

  obterClientes();

    atualizarCliente(1, { 
                         id: 1,
                         nome: "Teste",
                         logradouro: "AP",
                         numero: "12",
                         bairro: "Centro",
                         cidade: "Toledo",
                         uf: "PR" });

const condutor = { 
                  nome: "Teste", 
                  numeroHabilitacao: "1234567890", 
                  categoriaHabilitacao: "AB",
                  vencimentoHabilitacao: "2030-01-01" };

criarCondutor(condutor);

  obterCondutores();

    atualizarCondutor(2, { 
                          id: 2, 
                          categoriaHabilitacao: "ABC",
                          vencimentoHabilitacao: "2030-01-01" });

const veiculo = { 
                 placa: '1234-ABC',
                 marcaModelo: 'Ford Fusion',
                 anoFabricacao: 2020,
                 kmAtual: 20000 };

criarVeiculo(veiculo);

  obterVeiculos();

    atualizarVeiculo (1, {
                          id: 1,
                          placa: '1234-ABC',
                          marcaModelo: 'Ford Fusion',
                          anoFabricacao: 2023,
                          kmAtual: 0 });
