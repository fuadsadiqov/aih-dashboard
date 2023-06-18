export const data = [
    {
        name: "Trade",
        value: [
            {
                past: 2345,
                pastPercent: -3,
                current: 65345,
                currentPercent: 11,
            },
            {
                past: 122,
                pastPercent: -6,
                current: 3876,
                currentPercent: 3,
            },
            {
                past: 343,
                pastPercent: 2,
                current: 2111,
                currentPercent: 7,
            },
            {
                past: 987,
                pastPercent: -3,
                current: 5345,
                currentPercent: -13,
            },
            {
                past: 123,
                pastPercent: 9,
                current: 2001,
                currentPercent: 5,
            },
            {
                past: 223,
                pastPercent: 3,
                current: 4545,
                currentPercent: -5,
            },
            {
                past: 13654,
                pastPercent: 5,
                current: 13233,
                currentPercent: -6,
            }
        ]
    },
    {
        name: "Cash movement",
        value: [15, -10, 25, -8, 20, 12, 6]
    },
    {
        name: "Operational",
        value: [
            {
                name: 'Inflow',
                value: [
                    {
                        legend: 'cargo',
                        data: 87,
                        backgroundColor: 'blue'
                    },
                    {
                        legend: 'passangers',
                        data: 5,
                        backgroundColor: 'gray'
                    },
                    {
                        legend: 'other cash inflows',
                        data: 6,
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
        value: [25, 10, -8, 5, -20]
    },
    {
        name: 'Remaining debt',
        value: [
            {
                name: "first",
                value: [
                    {
                        legend: 'loans from gov',
                        data: 56,
                        backgroundColor: 'red'
                    },
                    {
                        legend: 'gov guaranteed',
                        data: 41,
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
                name: "first",
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
                        data: 43,
                        color: 'blue'
                    },
                    {
                        label: 'import',
                        data: 26,
                        color: 'gray'
                    },
                    {
                        label: 'export',
                        data: 22,
                        color: 'lightgreen'
                    },
                    {
                        label: 'internal',
                        data: 9,
                        color: 'green'
                    },
                ]
            },
            {
                name: 'Passanger',
                data: [
                    {
                        label: 'Abseron circular',
                        data: 75,
                        color: 'blue'
                    },
                    {
                        label: 'regional',
                        data: 25,
                        color: 'gray'
                    }
                ]
            },
            {
                name: 'Other',
                data: [
                    {
                        label: 'transit',
                        data: 32,
                        color: 'blue'
                    },
                    {
                        label: 'import',
                        data: 32,
                        color: 'lightgreen'
                    },
                    {
                        label: 'export',
                        data: 16,
                        color: 'green'
                    },
                    {
                        label: 'internal',
                        data: 13,
                        color: 'gray'
                    },
                    {
                        label: 'internal',
                        data: 7,
                        color: 'blue'
                    },
                ]
            }
        ]
    }
]