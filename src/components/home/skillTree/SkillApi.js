import { subDays, subHours } from 'date-fns';

const now = new Date();

class SkillsApi {
  getSkills() {
    const skills = [
      {
        frontend: [{
          id: '5ece2c077e39da27658aa8a9',
          attributes: ['Cotton'],
          category: 'dress',
          currency: '$',
          createdAt: subDays(now, 1).getTime(),
          image: '/static/mock-images/skill/product_1.jpeg',
          inventoryType: 'in_stock',
          isAvailable: true,
          isShippable: false,
          name: 'Charlie Tulip Dress',
          price: 23.99,
          quantity: 85,
          updatedAt: subHours(now, 6).getTime(),
          variants: 2
        },
        {
          id: '5ece2c077e39da27658aa8a9',
          attributes: ['Cotton'],
          category: 'dress',
          currency: '$',
          createdAt: subDays(now, 1).getTime(),
          image: '/static/mock-images/skill/product_1.jpeg',
          inventoryType: 'in_stock',
          isAvailable: true,
          isShippable: false,
          name: 'Charlie Tulip Dress',
          price: 23.99,
          quantity: 85,
          updatedAt: subHours(now, 6).getTime(),
          variants: 2
        }],
        backend: [{
          id: '5ece2c077e39da27658aa8a9',
          attributes: ['Cotton'],
          category: 'dress',
          currency: '$',
          createdAt: subDays(now, 1).getTime(),
          image: '/static/mock-images/skill/product_1.jpeg',
          inventoryType: 'in_stock',
          isAvailable: true,
          isShippable: false,
          name: 'Charlie Tulip Dress',
          price: 23.99,
          quantity: 85,
          updatedAt: subHours(now, 6).getTime(),
          variants: 2
        },
        {
          id: '5ece2c077e39da27658aa8a9',
          attributes: ['Cotton'],
          category: 'dress',
          currency: '$',
          createdAt: subDays(now, 1).getTime(),
          image: '/static/mock-images/skill/product_1.jpeg',
          inventoryType: 'in_stock',
          isAvailable: true,
          isShippable: false,
          name: 'Charlie Tulip Dress',
          price: 23.99,
          quantity: 85,
          updatedAt: subHours(now, 6).getTime(),
          variants: 2
        }],
        design: [{
          id: '5ece2c077e39da27658aa8a9',
          attributes: ['Cotton'],
          category: 'dress',
          currency: '$',
          createdAt: subDays(now, 1).getTime(),
          image: '/static/mock-images/skill/product_1.jpeg',
          inventoryType: 'in_stock',
          isAvailable: true,
          isShippable: false,
          name: 'Charlie Tulip Dress',
          price: 23.99,
          quantity: 85,
          updatedAt: subHours(now, 6).getTime(),
          variants: 2
        },
        {
          id: '5ece2c077e39da27658aa8a9',
          attributes: ['Cotton'],
          category: 'dress',
          currency: '$',
          createdAt: subDays(now, 1).getTime(),
          image: '/static/mock-images/skill/product_1.jpeg',
          inventoryType: 'in_stock',
          isAvailable: true,
          isShippable: false,
          name: 'Charlie Tulip Dress',
          price: 23.99,
          quantity: 85,
          updatedAt: subHours(now, 6).getTime(),
          variants: 2
        }], },

    ];

    return Promise.resolve(skills);
  }
}

export const skillApi = new SkillsApi();
