export type RegionType = {
  id: number,
  name: string,
  parent_id: number,
  shortcut: string
};

export type DistrictType = {
  id: number,
  name: string,
  veh_reg_num: string,
  code: number,
  region_id: number
};

export type VillageType = {
  id: number,
  fullname: string,
  shortname: string,
  zip: string | number,
  region_id: number,
  district_id: number,
};

export type FinderItemType = {
  id: number,
  //uuid: string,
  name: string,
  parent_id: number | null,
  description: string | null,
  children: FinderItemType[] | null
}

export type LevelsType = FinderItemType[][];