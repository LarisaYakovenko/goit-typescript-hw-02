/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type PicTop = Pick < AllType,'name' | 'color' >;
type PickBotton = Pick<AllType, 'position' | 'weight' >;


function compare (top: any, bottom: any): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

export {};