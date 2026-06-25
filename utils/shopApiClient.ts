import { APIRequestContext } from '@playwright/test';

const API_BASE = 'https://automationexercise.com/api';

export interface ShopProduct {
  id: number;
  name: string;
  price: string;
  brand: string;
  category: { usertype: { usertype: string }; category: string };
}

export interface ProductsResponse {
  responseCode: number;
  products: ShopProduct[];
}

export interface ShopUser {
  name: string;
  email: string;
  password: string;
  title: 'Mr' | 'Mrs';
  birthDate: string;
  birthMonth: string;
  birthYear: string;
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  zipcode: string;
  state: string;
  city: string;
  mobileNumber: string;
}

export class ShopApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async getProducts(): Promise<ProductsResponse> {
    const response = await this.request.get(`${API_BASE}/productsList`);
    return JSON.parse(await response.text());
  }

  async searchProducts(keyword: string): Promise<ProductsResponse> {
    const response = await this.request.post(`${API_BASE}/searchProduct`, {
      form: { search_product: keyword },
    });
    return JSON.parse(await response.text());
  }

  async createAccount(user: ShopUser): Promise<void> {
    const response = await this.request.post(`${API_BASE}/createAccount`, {
      form: {
        name: user.name,
        email: user.email,
        password: user.password,
        title: user.title,
        birth_date: user.birthDate,
        birth_month: user.birthMonth,
        birth_year: user.birthYear,
        firstname: user.firstName,
        lastname: user.lastName,
        company: user.company,
        address1: user.address1,
        address2: user.address2,
        country: user.country,
        zipcode: user.zipcode,
        state: user.state,
        city: user.city,
        mobile_number: user.mobileNumber,
      },
    });
    const body = JSON.parse(await response.text());
    if (![200, 201].includes(body.responseCode)) {
      throw new Error(`createAccount failed: ${JSON.stringify(body)}`);
    }
  }

  async deleteAccount(email: string, password: string): Promise<void> {
    const response = await this.request.delete(`${API_BASE}/deleteAccount`, {
      form: { email, password },
    });
    const body = JSON.parse(await response.text());
    if (body.responseCode !== 200) {
      throw new Error(`deleteAccount failed: ${JSON.stringify(body)}`);
    }
  }

  async verifyLogin(email: string, password: string): Promise<boolean> {
    const response = await this.request.post(`${API_BASE}/verifyLogin`, {
      form: { email, password },
    });
    const body = JSON.parse(await response.text());
    return body.responseCode === 200;
  }
}