import dynamic from 'next/dynamic'

import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  theme
} from "@chakra-ui/react"

import {
  Header
} from "../components/Header"

import {
  Sidebar
} from "../components/Sidebar"

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options ={
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-07-08T04:05:00.000Z',
      '2021-07-10T14:05:00.000Z',
      '2021-07-13T04:15:00.000Z',
      '2021-07-15T04:05:10.000Z',
      '2021-07-20T04:25:00.000Z',
      '2021-07-22T04:05:20.000Z',
      '2021-07-25T14:25:30.000Z'
    ]
  } as const,
  colors: [
    theme.colors.green[500]
  ],
  fill: {
    colors: [
      theme.colors.green[500]
    ],
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series1 = [
  { name: 'series1', data: [26, 5, 10, 10, 7, 19, 91] }
]

const series2 = [
  { name: 'series1', data: [4, 14, 25, 19, 91, 7, 10] }
]

export default function Dashboard() {
  return (
    <Flex
      direction='column'
      height='100vh'
    >
      <Header/>
      <Flex
        width='100%'
        maxWidth='1480px'
        marginY='6'
        marginX='auto'
        paddingX='6'
      >
        <Sidebar />
        <SimpleGrid
          flex='1'
          gap='4'
          minChildWidth='320px'
          alignItems='flex-start'
          paddingBottom='4'
        >
          <Box
            padding='8'
            borderRadius='8px'
            backgroundColor='gray.800'
          >
            <Text
              marginBottom='4'
              fontSize='lg'
            >
              Inscritos da semana
              <Chart
                type='area'
                height='160px'
                options={ options }
                series={ series1 }
              />
            </Text>
          </Box>
          <Box
            padding='8'
            borderRadius='8px'
            backgroundColor='gray.800'
          >
            <Text
              marginBottom='4'
              fontSize='lg'
            >
              Taxade abertura
              <Chart
                type='area'
                height='160px'
                options={ options }
                series={ series2 }
              />
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}