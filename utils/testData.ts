import { ShopUser } from './shopApiClient';

export function generateUser(): ShopUser {
  const timestamp = Date.now();
  return {
    name: `tester${timestamp}`,
    email: `tester${timestamp}@example.com`,
    password: 'Password123!',
    title: 'Mr',
    birthDate: '1',
    birthMonth: '1', // select uses numeric value
    birthYear: '2000',
    firstName: 'Test',
    lastName: 'User',
    company: 'TDLQA Inc',
    address1: '123 Test Street',
    address2: 'Suite 4',
    country: 'United States',
    zipcode: '901402',
    state: 'California',
    city: 'Sanfrancisco',
    mobileNumber: '+190008000',
  };
}