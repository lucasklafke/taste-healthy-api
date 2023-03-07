import { Test, TestingModule } from '@nestjs/testing';
import { FoodGroupService } from './food-group.service';

describe('FoodGroupService', () => {
  let service: FoodGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodGroupService],
    }).compile();

    service = module.get<FoodGroupService>(FoodGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
