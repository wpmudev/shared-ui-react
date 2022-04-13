import React from 'react'

const monthDays = [
    'Aug 12 2018', 'Aug 13 2018', 'Aug 14 2018', 'Aug 15 2018', 'Aug 16 2018', 'Aug 17 2018', 'Aug 18 2018', 'Aug 19 2018', 'Aug 20 2018', 'Aug 21 2018',
    'Aug 22 2018', 'Aug 23 2018', 'Aug 24 2018', 'Aug 25 2018', 'Aug 26 2018', 'Aug 27 2018', 'Aug 28 2018', 'Aug 29 2018', 'Aug 30 2018', 'Aug 31, 2018',
    'Sep 1, 2018', 'Sep 2, 2018', 'Sep 3, 2018', 'Sep 4, 2018', 'Sep 5, 2018', 'Sep 6, 2018', 'Sep 7, 2018', 'Sep 8, 2018', 'Sep 9, 2018', 'Sep 10, 2018'
];

const views = [
    300, 310, 305, 315, 300, 290, 270, 280, 275, 295,
    320, 315, 310, 305, 310, 305, 310, 320, 330, 340,
    330, 320, 315, 320, 325, 320, 315, 310, 305, 310
];

const viewsDraft = [
    300, 310, 305, 315, 300, 290, 270, 280, 275, 295,
    320, 315, 310, 305, 310, 305, 310, 320, 330, 340,
    330, 320, 315, 320, 325, 320, 100, 10, 0, 0
];

const submissions = [
    220, 230, 220, 225, 215, 230, 200, 210, 205, 195,
    190, 150, 160, 155, 165, 170, 180, 160, 200, 180,
    205, 210, 215, 220, 205, 210, 205, 210, 220, 230
];

const submissionsDraft = [
    220, 230, 220, 225, 215, 230, 200, 210, 205, 195,
    190, 150, 160, 155, 165, 170, 180, 160, 200, 180,
    205, 210, 215, 220, 205, 210, 0, 0, 0, 0
];

const chartData = {
    labels: monthDays,
    datasets: [
        {
            label: 'Submissions',
            data: submissions,
            fill: 'origin',
            backgroundColor: [
                '#E1F6FF'
            ],
            borderColor: [
                '#17A8E3'
            ],
            borderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBorderColor: '#17A8E3',
            pointHoverBackgroundColor: '#17A8E3'
        },
        {
            label: 'Views',
            data: views,
            fill: 'origin',
            backgroundColor: [
                '#F8F8F8'
            ],
            borderColor: [
                '#DDDDDD'
            ],
            borderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBorderColor: '#DDDDDD',
            pointHoverBackgroundColor: '#DDDDDD'
        }
    ]
};

const chartDataDraft = {
    labels: monthDays,
    datasets: [
        {
            label: 'Submissions',
            data: submissionsDraft,
            fill: 'origin',
            backgroundColor: [
                '#E1F6FF'
            ],
            borderColor: [
                '#17A8E3'
            ],
            borderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBorderColor: '#17A8E3',
            pointHoverBackgroundColor: '#17A8E3'
        },
        {
            label: 'Views',
            data: viewsDraft,
            fill: 'origin',
            backgroundColor: [
                '#F8F8F8'
            ],
            borderColor: [
                '#DDDDDD'
            ],
            borderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBorderColor: '#DDDDDD',
            pointHoverBackgroundColor: '#DDDDDD'
        }
    ]
};

const chartOptions = {
    maintainAspectRatio: false,
    plugins: { 
        legend: { 
            display: false
        }
    },
    scales: {
        xAxes: {
            display: false,
            gridLines: {
                color: 'rgba(0, 0, 0, 0)'
            }
        },
        yAxes: {
            display: false,
            gridLines: {
                color: 'rgba(0, 0, 0, 0)'
            },
            ticks: {
                beginAtZero: false,
                min: 0,
                max: 350,
                stepSize: 1
            }
        }
    },
    elements: {
        line: {
            tension: 0
        },
        point: {
            radius: 0
        }
    },
    tooltips: {
        custom: function( tooltip ) {

            if ( ! tooltip ) {
                return;
            }

            // Disable displaying the color box
            tooltip.displayColors = false;
        },
        callbacks: {
            title: function( tooltipItem, data ) {
                if ( 0 === tooltipItem[0].datasetIndex ) {
                    return tooltipItem[0].yLabel + ' Submissions';
                } else if ( 1 === tooltipItem[0].datasetIndex ) {
                    return tooltipItem[0].yLabel + ' Views';
                }
            },
            label: function( tooltipItem, data ) {
                return tooltipItem.xLabel;
            },

            // Set label text color
            labelTextColor: function( tooltipItem, chart ) {
                return '#AAAAAA';
            }
        }
    }
};

export {
    chartData,
    chartDataDraft,
    chartOptions
}