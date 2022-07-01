import RoadmapMilestone from 'types/api/RoadmapMilestone'

export const getById = (id: number): RoadmapMilestone => {
  console.log(`roadmap/${id}`)
  const roadmapMilestone: RoadmapMilestone = {
    milestones: [
      {
        goals: [
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'This feature indcludes responsive styles and basic html',
            finishDate: new Date('2021-05-01'),
            images: [],
            name: 'Board v1. Create Board component',
            shortDescription: '',
            startDate: new Date('2021-04-18'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-05-01'),
          },
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'This feature indcludes responsive styles and basic html',
            finishDate: new Date('2021-05-01'),
            images: [],
            name: 'Milestone v1. Create Milestone component',
            shortDescription: '',
            startDate: new Date('2021-04-18'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-05-01'),
          },
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'This feature indcludes responsive styles and basic html',
            finishDate: new Date('2021-05-01'),
            images: [],
            name: 'Goal v1. Create Goal component',
            shortDescription: '',
            startDate: new Date('2021-04-18'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-05-01'),
          },
          {
            category: {
              name: 'Global components',
              color: 'red',
            },
            description: 'It will be place and fixed in the application top',
            finishDate: new Date('2021-05-01'),
            images: [],
            name: 'Header v1. Create Header component',
            shortDescription: '',
            startDate: new Date('2021-04-18'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-05-01'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: '',
            finishDate: new Date('2021-04-04'),
            images: [],
            name: 'Create repository',
            shortDescription: '',
            startDate: new Date('2021-03-13'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-04-04'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: '',
            finishDate: new Date('2021-04-04'),
            images: [],
            name: 'Install ReactJS and basic structure',
            shortDescription: '',
            startDate: new Date('2021-04-04'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-04-04'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: '',
            finishDate: new Date('2021-04-18'),
            images: [],
            name: 'Define initial Roadmap types',
            shortDescription: '',
            startDate: new Date('2021-04-04'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-04-18'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description:
              'With this feature we will can get a fake data from a fake service. It is necessary to future real connections.',
            finishDate: new Date('2021-05-09'),
            images: [],
            name: 'Add services and react query structure',
            shortDescription: '',
            startDate: new Date('2021-05-01'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-05-09'),
          },
        ],
        finishDate: new Date('2021-05-09'),
        name: '0.1',
        startDate: new Date('2021-03-13'),
        status: 'Done',
      },
      {
        goals: [
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'We will updated Milestone component with new styles and expandable behaviour',
            finishDate: new Date('2021-07-17'),
            images: [],
            name: 'Milestone v2',
            shortDescription: '',
            startDate: new Date('2021-05-10'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-07-17'),
          },
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'We will updated Goal component with new styles',
            finishDate: new Date('2021-07-17'),
            images: [],
            name: 'Goal v2',
            shortDescription: '',
            startDate: new Date('2021-05-10'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-07-17'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: '',
            finishDate: new Date('2021-05-10'),
            images: [],
            name: 'Check and update dependencies',
            shortDescription: '',
            startDate: new Date('2021-05-09'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-05-10'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: '',
            finishDate: new Date('2021-05-09'),
            images: [],
            name: 'Add Svg template to import them',
            shortDescription: '',
            startDate: new Date('2021-05-09'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-05-09'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: 'It is required to add quailty to code',
            finishDate: new Date('2021-07-20'),
            images: [],
            name: 'Add tests infrastructure',
            shortDescription: '',
            startDate: new Date('2021-05-09'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-07-20'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: 'Roboto will be added as default font with his several font weight',
            finishDate: new Date('2021-07-24'),
            images: [],
            name: 'Roboto as default font',
            shortDescription: '',
            startDate: new Date('2021-07-20'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-07-24'),
          },
        ],
        finishDate: new Date('2021-07-24'),
        name: '0.2',
        startDate: new Date('2021-05-29'),
        status: 'Done',
      },
      {
        goals: [
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'Allow categorize goals to structure them',
            images: [],
            name: 'Milestone v3',
            finishDate: new Date('2021-09-17'),
            shortDescription: '',
            startDate: new Date('2021-08-29'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-09-17'),
          },
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'Goal v3. Add behaviour when click in a goal to open a dialog to expand it information',
            images: [],
            name: 'Goal v3',
            finishDate: new Date('2021-10-24'),
            shortDescription: '',
            startDate: new Date('2021-09-17'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-10-24'),
          },
          {
            category: {
              name: 'Global components',
              color: 'red',
            },
            description: 'Create global dialog component',
            images: [],
            name: 'Dialog v1',
            finishDate: new Date('2021-10-23'),
            shortDescription: '',
            startDate: new Date('2021-09-17'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-10-23'),
          },
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'Goal Dialog v1. Create dialog when click in a goal to expand it information',
            images: [],
            name: 'Goal Dialog v1',
            finishDate: new Date('2021-10-23'),
            shortDescription: '',
            startDate: new Date('2021-09-17'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-10-23'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description:
              'Add context infrastructure to store data and it data can be shared between whole application components',
            finishDate: new Date('2021-09-21'),
            images: [],
            name: 'Context to store data',
            shortDescription: '',
            startDate: new Date('2021-09-17'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-09-21'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: 'Set default font styles as Roboto and apply rem sizes',
            finishDate: new Date('2021-10-31'),
            images: [],
            name: 'Default font Roboto',
            shortDescription: '',
            startDate: new Date('2021-10-24'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-10-31'),
          },
        ],
        finishDate: new Date('2021-10-31'),
        name: '0.3',
        startDate: new Date('2021-08-29'),
        status: 'Done',
      },
      {
        goals: [
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'Goal Dialog v2. Add default image',
            finishDate: new Date('2021-11-01'),
            images: [],
            name: 'Goal Dialog v2',
            shortDescription: '',
            startDate: new Date('2021-11-01'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-10-31'),
          },
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'Goal v4. Add default image preview',
            finishDate: new Date('2021-11-01'),
            images: [],
            name: 'Goal v4',
            shortDescription: '',
            startDate: new Date('2021-11-01'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-10-31'),
          },
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'Milestone v4. Show current milestone status before all categories and goals',
            finishDate: new Date('2021-11-01'),
            images: [],
            name: 'Milestone v4',
            shortDescription: '',
            startDate: new Date('2021-11-01'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-11-01'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: 'Create new scrollbar style and apply it in whole application',
            finishDate: new Date('2021-11-10'),
            images: [],
            name: 'New scrollbar style',
            shortDescription: '',
            startDate: new Date('2021-11-10'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-11-10'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: 'To avoid several problems when execute npm install, we will establish a NodeJs version',
            finishDate: new Date('2021-11-09'),
            images: [],
            name: 'NodeJs version fixed',
            shortDescription: '',
            startDate: new Date('2021-11-09'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-11-09'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: 'Is necessary set the project LICENSE to allow than other users use the component',
            finishDate: new Date('2021-11-10'),
            images: [],
            name: 'Create LICENSE file',
            shortDescription: '',
            startDate: new Date('2021-11-10'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-11-10'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            finishDate: new Date('2021-11-10'),
            description: 'Create readme with instruction to use the Roadmap Milestone component',
            images: [],
            name: 'Readme',
            shortDescription: '',
            startDate: new Date('2021-11-10'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-11-10'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: 'We add store Global Dialog test to check its correct behaviour automatically',
            finishDate: new Date('2021-11-11'),
            images: [],
            name: 'Add store test',
            shortDescription: '',
            startDate: new Date('2021-11-11'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-11-11'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description:
              'To improve the speed of application we will added a technical upgrade to load page in lazy mode also we will develop a Loader component to show the load',
            finishDate: new Date('2021-11-11'),
            images: [],
            name: 'Lazy page import',
            shortDescription: '',
            startDate: new Date('2021-11-11'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-11-11'),
          },
        ],
        finishDate: new Date('2021-11-11'),
        name: '0.4',
        startDate: new Date('2021-10-31'),
        status: 'Done',
      },
      {
        goals: [
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'Goal Dialog v3. Responsive dialog',
            finishDate: new Date('2021-11-11'),
            images: [],
            name: 'Goal Dialog v3',
            shortDescription: '',
            startDate: new Date('2021-11-11'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-11-11'),
          },
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description:
              'Milestone v5. Hide completed milestones, add an option to collapse/expand them and select initial behaviour',
            finishDate: new Date('2022-04-06'),
            images: [],
            name: 'Milestone v5',
            shortDescription: '',
            status: 'Done',
            tags: [],
            updateDate: new Date('2022-04-06'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description:
              'We have to add Breakpoints (mobile and laptop) to handle the way to show components in different sizes depending screen size or device',
            finishDate: new Date('2021-11-11'),
            images: [],
            name: 'Breakpoints and devices',
            shortDescription: '',
            startDate: new Date('2021-11-11'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2021-11-11'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description: 'With translation funcionality we can show the principal labels in differents languages',
            finishDate: new Date('2022-04-10'),
            images: [],
            name: 'Add translation functionality',
            shortDescription: '',
            startDate: new Date('2022-04-09'),
            status: 'Done',
            tags: [],
            updateDate: new Date('2022-04-10'),
          },
          {
            category: {
              name: 'Infrastructure',
              color: 'red',
            },
            description:
              'Adding all colors to palette theme we get a robust color handling and we will can allow change current styles in the future easier',
            images: [],
            name: 'Add all color to palette theme',
            shortDescription: '',
            status: 'Pending',
            tags: [],
            updateDate: new Date('2021-11-11'),
          },
        ],
        name: '0.5',
        startDate: new Date('2021-11-11'),
        status: 'Ongoing',
      },
      {
        goals: [
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description: 'Goal v5. Add different colors to differentiate between completed and uncompleted goals',
            images: [],
            name: 'Goal v5',
            shortDescription: '',
            status: 'Pending',
            tags: [],
            updateDate: new Date('2021-11-10'),
          },
          {
            category: {
              name: 'Components',
              color: 'green',
            },
            description:
              'Milestone v6. Add different colors to differentiate between completed and uncompleted milestones',
            images: [],
            name: 'Milestone v6',
            shortDescription: '',
            status: 'Pending',
            tags: [],
            updateDate: new Date('2021-11-10'),
          },
        ],
        name: '0.6',
        status: 'Pending',
      },
    ],
    name: 'Roadmap Milestone',
    startDate: new Date('2021-03-13'),
  }

  return roadmapMilestone
}
