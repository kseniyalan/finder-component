import countries from './countries.json';
import countryParts from './countryParts.json';
import regions from './regions.json';
import districts from './districts.json';
import villages from './villages.json';
import { RegionType, DistrictType, VillageType, FinderItemType, LevelsType } from './types';

//Format incoming data
const formattedRegions = regions.map((region: RegionType): FinderItemType => {
  return {
    id: region.id,
    name: region.name,
    parent_id: region.parent_id,
    description: region.shortcut,
    children: []
  };
});

const formattedDistricts = districts.map((district: DistrictType): FinderItemType => {
  return {
    id: district.id,
    name: district.name,
    parent_id: district.region_id,
    description: district.veh_reg_num,
    children: []
  };
});

const formattedVillages = villages.map((village: VillageType): FinderItemType => {
  return {
    id: village.id,
    name: village.fullname,
    parent_id: village.district_id,
    description: village.zip.toString(),
    children: []
  };
});

//Temp array to create a tree
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
    parent.children.forEach((child) => {
      child.parent = parent;
    });
  });
  return parents;
}

//Create a tree from the last (the lowest) level to the top
//The first call adds elements on the last level as children to the elements of the next level
//For now it has only one root element (country - Slovakia)
export const data = levels.reduceRight(createTree);

