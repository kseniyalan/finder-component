import countries from './countries.json';
import countryParts from './countryParts.json';
import regions from './regions.json';
import districts from './districts.json';
import villages from './villages.json';
import { RegionType, DistrictType, VillageType, FinderItemType, LevelsType } from './types';

const formattedRegions = regions.map((region: RegionType): FinderItemType => {
  return {
    id: region.id,
    //uuid: `1_${region.parent_id}_${region.id}`, //FIX
    name: region.name,
    parent_id: region.parent_id,
    description: region.shortcut,
    children: []
  };
});

const formattedDistricts = districts.map((district: DistrictType): FinderItemType => {
  return {
    id: district.id,
    //uuid: `1_${district.region_id}_${district.id}`, //FIX
    name: district.name,
    parent_id: district.region_id,
    description: district.veh_reg_num,
    children: []
  };
});

const formattedVillages = villages.map((village: VillageType): FinderItemType => {
  return {
    id: village.id,
    //uuid: `1_${village.district_id}_${village.id}`, //FIX
    name: village.fullname,
    parent_id: village.district_id,
    description: village.zip.toString(),
    children: []
  };
});

const levels: LevelsType = [
  countries,
  countryParts,
  formattedRegions,
  formattedDistricts,
  formattedVillages
];

const createTree = (children: FinderItemType[], parents: FinderItemType[]): FinderItemType[] => {
  parents.forEach((parent: FinderItemType) => {
    parent.children = children.filter((child) => child.parent_id === parent.id);
  });
  return parents;
}

export const data = levels.reduceRight(createTree);

