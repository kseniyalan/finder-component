import regions from './regions.json';
import districts from './districts.json';
import villages from './villages.json';
import { RegionType, DistrictType, VillageType, FinderItemType } from './types';

const formattedRegions = regions.map((region: RegionType): FinderItemType => {
  return {
    id: region.id,
    uuid: `1_${region.parent_id}_${region.id}`, //FIX
    name: region.name,
    parent_id: region.parent_id,
    description: region.shortcut,
    children: []
  };
});

const formattedDistricts = districts.map((district: DistrictType): FinderItemType => {
  return {
    id: district.id,
    uuid: `1_${district.region_id}_${district.id}`, //FIX
    name: district.name,
    parent_id: district.region_id,
    description: district.veh_reg_num,
    children: []
  };
});

const formattedVillages = villages.map((village: VillageType): FinderItemType => {
  return {
    id: village.id,
    uuid: `1_${village.district_id}_${village.id}`, //FIX
    name: village.fullname,
    parent_id: village.district_id,
    description: village.zip.toString(),
    children: []
  };
});

console.log('formattedRegions: ', formattedRegions);
console.log('formattedDistricts: ', formattedDistricts);
console.log('formattedVillages: ', formattedVillages);

export const data = [
  {
    id: 1,
    uuid: '1',
    name: 'Slovensko',
    parent_id: null,
    description: null,
    children: [
      {
        id: 1,
        uuid: '1_1',
        name: 'Západné Slovensko',
        parent_id: 1,
        description: null,
        children: []
      },
      {
        id: 2,
        uuid: '1_2',
        name: 'Stredné Slovensko',
        parent_id: 1,
        description: null,
        children: []
      },
      {
        id: 3,
        uuid: '1_3',
        name: 'Východné Slovensko',
        parent_id: 1,
        description: null,
        children: []
      }
    ]
  }
];

