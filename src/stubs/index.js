export const tasks = [
  {
    id: 1,
    columnName: 'inProgress',
    title: 'Заголовок задачи',
    expirationDate: 'Сегодня - 22 февраля',
  },
  {
    id: 2,
    columnName: 'Open',
    title: 'Заголовок задачи',
    expirationDate: 'Сегодня - 22 февраля',
  },
  {
    id: 3,
    columnName: 'Done',
    title: 'Заголовок задачи',
    expirationDate: 'Сегодня - 22 февраля',
  },
  {
    id: 4,
    columnName: 'inProgress',
    title: 'Заголовок задачи',
    expirationDate: 'Сегодня - 22 февраля',
  },
  {
    id: 5,
    columnName: 'Open',
    title: 'Заголовок задачи',
    expirationDate: 'Сегодня - 22 февраля',
  },
  {
    id: 6,
    columnName: 'Open',
    title: 'Заголовок задачи',
    expirationDate: 'Сегодня - 22 февраля',
  },
  {
    id: 7,
    columnName: 'Done',
    title: 'Заголовок задачи',
    expirationDate: 'Сегодня - 22 февраля',
  },
  {
    id: 8,
    columnName: 'Done',
    title: 'Заголовок задачи',
    expirationDate: 'Сегодня - 22 февраля',
  },
  {
    id: 9,
    columnName: 'Done',
    title: 'Заголовок задачи',
    expirationDate: 'Сегодня - 22 февраля',
  },
  // {
  //   id: 10,
  //   columnName: 'Some',
  //   title: 'Заголовок задачи',
  //   expirationDate: 'Сегодня - 22 февраля',
  // },
  // {
  //   id: 11,
  //   columnName: 'Any',
  //   title: 'Заголовок задачи',
  //   expirationDate: 'Сегодня - 22 февраля',
  // }
]

export const employees = [
  {
    id: 1,
    fio: 'Фамилия Имя Отчество',
    position: 'Сотрудник',
    tasks: [
      ...tasks.slice(0, 4)
    ]
  },
  {
    id: 2,
    fio: 'Фамилия Имя Отчество',
    position: 'Сотрудник',
    tasks: [
      ...tasks.slice(4, 5)
    ]
  },
  {
    id: 3,
    fio: 'Фамилия Имя Отчество',
    position: 'Сотрудник',
    tasks: [
      ...tasks.slice(5, 7)
    ]
  }
]

export const createdEmployees = [
  {
    id: 1,
    lastName: 'last-name',
    firstName: 'first-name',
    surname: 'surname',
    post: 'Сотрудник',
    tel: '8 900 900 00 00',
    gender: 'Мужской',
    birthdate: '2000-01-01',
  },
  {
    id: 2,
    lastName: 'Другой работник',
    firstName: 'Имя',
    surname: 'Отчество',
    post: 'Начальник',
    tel: '8 000 100 00 00',
    gender: 'Женский',
    birthdate: '2000-01-01',
  },
  {
    id: 3,
    lastName: 'Топ',
    firstName: 'Работник',
    surname: 'Без отчества',
    post: 'Кассир',
    tel: '8 910 980 07 10',
    gender: 'Мужской',
    birthdate: '2000-01-01',
  }
]