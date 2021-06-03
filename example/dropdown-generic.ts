interface Email {
  value: string,
  selected: boolean
}
interface ProductNumber {
  value: number,
  selected: boolean
}
interface DropdownItem<T> {
  value: T,
  selected: boolean
}

const emails: Array<DropdownItem<string>> = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: Array<DropdownItem<number>> = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item: Email | ProductNumber): HTMLOptionElement {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

function createDropdownItem<T>(item: DropdownItem<T>): HTMLOptionElement {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(email => {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});


// NOTE: 상품 드롭 다운 아이템 추가
numberOfProducts.forEach(product => {
  const item = createDropdownItem<number>(product);
  const selectTag = document.querySelector('#product-dropdown');
  selectTag.appendChild(item);
});