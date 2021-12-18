//order a array of object in ascending order
const names : any [] = [
    {
        id: '3',
        name: 'jose',
        located: 'colima',
        cp: 23243,
    },
    {
        id: '4',
        name: 'jose',
        located: 'colima',
        cp: 23243,
    },
    {
        id: '2',
        name: 'jose',
        located: 'colima',
        cp: 23243,
    },
    {
        id: '1',
        name: 'jose',
        located: 'colima',
        cp: 23243,
    },
    {
        id: '5',
        name: 'jose',
        located: 'colima',
        cp: 23243,
    }
]
const n = names.sort( (a,b) => a.id-b.id);
console.log(n)