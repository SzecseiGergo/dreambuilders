const inputFields = [

  {
    type: 'text',
    label: 'Név',
    name: 'fullName',
    id: 'fullName'
  },
  {
    type: 'email',
    label: 'Email cím',
    name: 'email',
    id: 'email'
  }
];

const select = [
  {
    label: 'Szolgáltatás',
    name: 'service',
    id: 'service',
    valueList: ['Állapotfelmérés', 'Gyökérkezelés', 'Tömés']
  }
]

const dataTimeInputFields = [

  {
    type: 'datetime-local',
    label: 'Időpont',
    name: 'appointment',
    id: 'appointment'
  }
];

const checkBoxButtonsForForm = [
  {
    label: 'Sürgős',
    name: 'isUrgent',
    id: 'isUrgent',
    value: true,
  }
];



const tableSelect = [
  {
    label: 'Szűrés kategóriára',
    name: 'category',
    id: 'category',
    valueList: ["Állapotfelmérés", "Tömés", "Gyökérkezelés"]
  }
];

const checkBoxButtons = [
  {
    label: 'Sürgős esetek',
    name: 'isUrgent',
    id: 'isUrgent',
    value: 'isUrgent',
    lastItem: true
  }
];

export { inputFields, dataTimeInputFields, checkBoxButtonsForForm, select, tableSelect, checkBoxButtons }