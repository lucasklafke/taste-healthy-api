import {
  HttpException,
  HttpStatus,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { IngredientDosageRepository } from '../ingredient-dosage/ingredient-dosage.repository';
import { IngredientDosageService } from '../ingredient-dosage/ingredient-dosage.service';
import { DishRepository } from './dish.repository';
import { DishService } from './dish.service';

describe('DishService', () => {
  let dishService: DishService;
  let dishRepository: DishRepository;
  const fakeDishes = [
    {
      name: 'firstDish',
      description: 'taste good',
      time_to_prepare: '15minuts',
      preparation: "it's easyss, just post /dish",
      author_id: 1,
      ingredients: [
        {
          quantity: 'string',
          description: 'string',
          ingredient_id: 2,
          dish_id: null,
        },
        {
          quantity: 'string',
          description: 'string',
          ingredient_id: 1,
          dish_id: null,
        },
      ],
    },
    {
      name: 'firstDish',
      description: 'taste good',
      time_to_prepare: '15minuts',
      preparation: "it's easyss, just post /dish",
      author_id: 2,
      ingredients: [
        {
          quantity: 'string',
          description: 'string',
          ingredient_id: 2,
          dish_id: null,
        },
        {
          quantity: 'string',
          description: 'string',
          ingredient_id: 1,
          dish_id: null,
        },
      ],
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DishService,
        {
          provide: DishRepository,
          useValue: {
            create: jest.fn().mockResolvedValue(fakeDishes[0]),
            findOne: jest.fn().mockResolvedValue(fakeDishes[0]),
            update: jest.fn().mockResolvedValue({
              id: 1,
              description: 'taste good',
              name: 'firstDish',
              preparation: "it's easyss, just post /dish",
              time_to_prepare: '15 minuts',
              author_id: 1,
            }),
            findAll: jest.fn().mockResolvedValue(fakeDishes),
            findByName: jest.fn().mockResolvedValue(fakeDishes),
            remove: jest.fn().mockResolvedValue(HttpStatus.NO_CONTENT),
          },
        },
        // { provide: PrismaService, useValue: {} },
        // { provide: IngredientDosageService, useValue: {} },
        // { provide: IngredientDosageRepository, useValue: {} },
      ],
    }).compile();

    dishService = module.get<DishService>(DishService);
    dishRepository = module.get<DishRepository>(DishRepository);
  });

  it('should be defined', () => {
    expect(dishService).toBeDefined();
  });

  describe('create dish endpoint', () => {
    it('should create a dish', async () => {
      const dish = await dishService.create(fakeDishes[0]);

      expect(dish).toBeDefined();
    });
  });

  describe('update and delete route', () => {
    it('should update a dish', async () => {
      const updateDishData = {
        name: 'firstDish',
        description: 'taste good',
        time_to_prepare: '15 minuts',
        preparation: "it's easyss, just post /dish",
      };
      const dish = await dishService.update(1, updateDishData, 1);

      expect(dish).toBeDefined();
      expect(dish).toEqual({
        id: 1,
        description: 'taste good',
        name: 'firstDish',
        preparation: "it's easyss, just post /dish",
        time_to_prepare: '15 minuts',
        author_id: 1,
      });
    });

    it('should return unauthorized when update others dishes', async () => {
      jest.spyOn(dishRepository, 'findOne').mockImplementationOnce((): any => {
        return fakeDishes[1];
      });
      const data = {
        name: 'firstDish',
        description: 'taste good',
        time_to_prepare: '15 minuts',
        preparation: "it's easyss, just post /dish",
      };
      try {
        const dish = await dishService.update(1, data, 1);
      } catch (error) {
        expect(error).toEqual(
          new UnauthorizedException('you are not the author'),
        );
      }
    });
    it('should delete a dish', async () => {
      const result = await dishService.remove(1, 1);
      expect(result).toEqual(HttpStatus.NO_CONTENT);
    });
  });
  describe('find routes', () => {
    it('should findOne dish', async () => {
      const dish = await dishService.findOne(1);

      expect(dish).toEqual(fakeDishes[0]);
    });

    it('should find all dishes without filters', async () => {
      const dishes = await dishService.findAll({ name: null });

      expect(dishes).toEqual(fakeDishes);
    });

    it('should find all dishes with filters', async () => {
      const dishes = await dishService.findAll({ name: 'firstDish' });

      expect(dishes).toEqual(fakeDishes);
    });

    it('should find by name', async () => {
      const dishes = await dishService.findByName('firstDishes');
      expect(dishes).toEqual(fakeDishes);
    });
  });
});
