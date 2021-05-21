import axios from "axios";



const { REACT_APP_BACKEND_BASE_URL } = process.env;

class PortfolioService {
  constructor() {
    let service = axios.create({
      baseURL: REACT_APP_BACKEND_BASE_URL,
      withCredentials: true,
    });

    this.service = service;
  }

  createPortfolio = (data) =>
    this.service.post("/portfolios", data).then((response) => response.data);

  getPortfolios = () =>
    this.service.get("/portfolios").then((response) => response.data);

  getOnePortfolio = (portfolioId) =>
    this.service
      .get(`/portfolios/${portfolioId}`)
      .then((response) => response.data);

  getOnePortfolioForRecruiter = (portfolioId) =>
      this.service
        .get(`/recruitment/${portfolioId}`)
        .then((response) => response.data);

  updatePortfolio = (portfolioId, data) =>
    this.service
      .put(`/portfolios/${portfolioId}`, data)
      .then((response) => response.data);

  removePortfolio = (portfolioId) =>
    this.service
      .delete(`/portfolios/${portfolioId}`)
      .then((response) => response.data);
}

export default PortfolioService;