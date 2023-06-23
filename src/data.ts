export const data = [
    {
        name: "Trade",
        value: [
            {
                name: 'Cargo volume (tons)',
                past: 2345,
                pastPercent: -3,
                current: 65345,
                currentPercent: 11,
            },
            {
                name: 'Import',
                past: 122,
                pastPercent: -6,
                current: 3876,
                currentPercent: 3,
            },
            {
                name: 'Export',
                past: 343,
                pastPercent: 2,
                current: 2111,
                currentPercent: 7,
            },
            {
                name: 'Transit',
                past: 987,
                pastPercent: -3,
                current: 5345,
                currentPercent: -13,
            },
            {
                name: 'Internal',
                past: 123,
                pastPercent: 9,
                current: 2001,
                currentPercent: 5,
            },
            {
                name: 'Passangers',
                past: 223,
                pastPercent: 3,
                current: 4545,
                currentPercent: -5,
            },
            {
                name: 'Employees',
                past: 13654,
                pastPercent: 5,
                current: 13233,
                currentPercent: -6,
            }
        ]
    },
    {
        name: "Cash movement",
        value: [[15, 40], [40, 60], [25, 50], [8, 33], [60, 70], [60, 85], [0, 55]],
        label: [
            ['Opening','balance'], 
            ['Operating', 'inflow'], 
            ['Financing', 'activities'], 
            ['Operating', 'outflow'], 
            ['FX', 'difference'], 
            ['Investing', 'activities'], 
            ['Cash', 'balance']
        ]
    },
    {
        name: "Operational",
        value: [
            {
                name: 'Inflow',
                value: [
                    {
                        legend: 'cargo',
                        data: 80,
                        backgroundColor: 'blue'
                    },
                    {
                        legend: 'passangers',
                        data: 15,
                        backgroundColor: 'gray'
                    },
                    {
                        legend: 'other cash inflows',
                        data: 5,
                        backgroundColor: 'lightgreen'
                    }
                ]
            },
            {
                name: 'Outflow',
                value: [
                    {
                        legend: 'staff related costs',
                        data: 55,
                        backgroundColor: 'green'
                    },
                    {
                        legend: 'utility',
                        data: 16,
                        backgroundColor: 'blue'
                    },
                    {
                        legend: 'taxes',
                        data: 6,
                        backgroundColor: 'lightgreen'
                    },
                    {
                        legend: 'fuel',
                        data: 20,
                        backgroundColor: 'gray'
                    }
                ]
            },
        ]
    },
    {
        name: "Creditor's balance",
        value: [[0, 80], [40, 65], [10, 25], [75, 84], [0, 90]],
        label: [['Opening', 'balance'], ['Accured', 'credit'], ['Paid', 'credit'], 'Adjustment', ['Closing', 'balance']]    
    },
    {
        name: 'Remaining debt',
        value: [
            {
                name: "first",
                value: [
                    {
                        legend: 'loans from gov',
                        data:36,
                        backgroundColor: 'red'
                    },
                    {
                        legend: 'gov guaranteed',
                        data: 51,
                        backgroundColor: 'blue'
                    },
                    {
                        legend: 'loans without government gurantee',
                        data: 3,
                        backgroundColor: 'gray'
                    },
                ]
            },
            {
                name: "second",
                value: [
                    {
                        legend: 'credit suisse',
                        data: 20,
                        backgroundColor: 'green'
                    },
                    {
                        legend: 'societe generate',
                        data: 42,
                        backgroundColor: 'blue'
                    },
                    {
                        legend: 'HSBC bank',
                        data: 38,
                        backgroundColor: 'lightgreen'
                    },
                    {
                        legend: '',
                        data: 40,
                        backgroundColor: 'white'
                    },
                ]
            }
        ]
    },
    {
        name: 'Rolling stock',
        value: [
            {
                name: "Cargo",
                value: [
                        {
                            title: 'Wagons',
                            data: [3232, 65]
                        },
                        {
                            title: 'Main locomotives',
                            data: [23, 70]
                        },
                        {
                            title: 'Electro locomotives',
                            data: [97, 51]
                        },
                        {
                            title: 'Shunting locomotives',
                            data: [67, 65]
                        },
                    ]
            },
            {
                name: "Passanger",
                value: [
                        {
                            title: 'Wagons',
                            data: [213, 59]
                        },
                        {
                            title: 'Locomotives',
                            data: [15, 92]
                        },
                        {
                            title: 'Trains',
                            data: [13, 86]
                        }
                    ]
            },
        ]
    },
    {
        name: 'Revenue breakdown',
        value: [
            {
                name: 'Cargo',
                data: [
                    {
                        label: 'transit',
                        data: 25,
                        color: 'blue'
                    },
                    {
                        label: 'import',
                        data: 42,
                        color: 'gray'
                    },
                    {
                        label: 'export',
                        data: 25,
                        color: 'lightgreen'
                    },
                    {
                        label: 'internal',
                        data: 8,
                        color: 'green'
                    },
                ]
            },
            {
                name: 'Passenger',
                data: [
                    {
                        label: 'Abseron circular',
                        data: 80,
                        color: 'blue'
                    },
                    {
                        label: 'regional',
                        data: 20,
                        color: 'gray'
                    }
                ]
            },
            {
                name: 'Other',
                data: [
                    {
                        label: 'transit',
                        data: 21,
                        color: 'blue'
                    },
                    {
                        label: 'import',
                        data: 15,
                        color: 'lightgreen'
                    },
                    {
                        label: 'export',
                        data: 7,
                        color: 'green'
                    },
                    {
                        label: 'internal',
                        data: 30,
                        color: 'gray'
                    },
                    {
                        label: 'internal',
                        data: 28,
                        color: 'blue'
                    },
                ]
            }
        ]
    }
]