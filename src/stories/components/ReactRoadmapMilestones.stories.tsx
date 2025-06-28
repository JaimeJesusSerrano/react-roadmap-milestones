import type { Meta, StoryObj } from '@storybook/react-vite'

import { RoadmapMilestones } from '@/components/organisms/roadmap-milestones'
import type { RoadmapMilestones as IRoadmapMilestones } from '@/types/model/RoadmapMilestones'
import type { Theme as ITheme } from '@/types/app/Theme'

const roadmapMilestonesData: IRoadmapMilestones = {
  name: 'Roadmap Milestone',
  milestones: [
    {
      goals: [
        {
          category: {
            name: 'Components',
          },
          description: 'This feature includes responsive styles and basic html',
          finishDate: new Date('2021-05-01'),
          name: 'Board v1. Create Board component',
          startDate: new Date('2021-04-18'),
          status: 'Done',
          updateDate: new Date('2021-05-01'),
        },
        {
          category: {
            name: 'Components',
          },
          description: 'This feature includes responsive styles and basic html',
          finishDate: new Date('2021-05-01'),
          name: 'Milestone v1. Create Milestone component',
          startDate: new Date('2021-04-18'),
          status: 'Done',
          updateDate: new Date('2021-05-01'),
        },
        {
          category: {
            name: 'Components',
          },
          description: 'This feature includes responsive styles and basic html',
          finishDate: new Date('2021-05-01'),
          name: 'Goal v1. Create Goal component',
          startDate: new Date('2021-04-18'),
          status: 'Done',
          updateDate: new Date('2021-05-01'),
        },
        {
          category: {
            name: 'Global components',
          },
          description: 'It will be place and fixed in the application top',
          finishDate: new Date('2021-05-01'),
          name: 'Header v1. Create Header component',
          startDate: new Date('2021-04-18'),
          status: 'Done',
          updateDate: new Date('2021-05-01'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: '',
          finishDate: new Date('2021-04-04'),
          name: 'Create repository',
          startDate: new Date('2021-03-13'),
          status: 'Done',

          updateDate: new Date('2021-04-04'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: '',
          finishDate: new Date('2021-04-04'),
          name: 'Install ReactJS and basic structure',
          startDate: new Date('2021-04-04'),
          status: 'Done',
          updateDate: new Date('2021-04-04'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: '',
          finishDate: new Date('2021-04-18'),
          name: 'Define initial Roadmap types',
          startDate: new Date('2021-04-04'),
          status: 'Done',
          updateDate: new Date('2021-04-18'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description:
            'With this feature we will can get a fake data from a fake service. It is necessary to future real connections.',
          finishDate: new Date('2021-05-09'),
          name: 'Add services and react query structure',
          startDate: new Date('2021-05-01'),
          status: 'Done',
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
          },
          description: 'We will updated Milestone component with new styles and expandable behavior',
          finishDate: new Date('2021-07-17'),
          name: 'Milestone v2',
          startDate: new Date('2021-05-10'),
          status: 'Done',
          updateDate: new Date('2021-07-17'),
        },
        {
          category: {
            name: 'Components',
          },
          description: 'We will updated Goal component with new styles',
          finishDate: new Date('2021-07-17'),
          name: 'Goal v2',
          startDate: new Date('2021-05-10'),
          status: 'Done',
          updateDate: new Date('2021-07-17'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: '',
          finishDate: new Date('2021-05-10'),
          name: 'Check and update dependencies',
          startDate: new Date('2021-05-09'),
          status: 'Done',
          updateDate: new Date('2021-05-10'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: '',
          finishDate: new Date('2021-05-09'),
          name: 'Add Svg template to import them',
          startDate: new Date('2021-05-09'),
          status: 'Done',
          updateDate: new Date('2021-05-09'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: 'It is required to add quality to code',
          finishDate: new Date('2021-07-20'),
          name: 'Add tests infrastructure',
          startDate: new Date('2021-05-09'),
          status: 'Done',
          updateDate: new Date('2021-07-20'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: 'Roboto will be added as default font with his several font weight',
          finishDate: new Date('2021-07-24'),
          name: 'Roboto as default font',
          startDate: new Date('2021-07-20'),
          status: 'Done',
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
          },
          description: 'Allow categorize goals to structure them',
          finishDate: new Date('2021-09-17'),
          name: 'Milestone v3',
          startDate: new Date('2021-08-29'),
          status: 'Done',
          updateDate: new Date('2021-09-17'),
        },
        {
          category: {
            name: 'Components',
          },
          description: 'Goal v3. Add behavior when click in a goal to open a dialog to expand it information',
          finishDate: new Date('2021-10-24'),
          name: 'Goal v3',
          startDate: new Date('2021-09-17'),
          status: 'Done',
          updateDate: new Date('2021-10-24'),
        },
        {
          category: {
            name: 'Global components',
          },
          description: 'Create global dialog component',
          finishDate: new Date('2021-10-23'),
          name: 'Dialog v1',
          startDate: new Date('2021-09-17'),
          status: 'Done',
          updateDate: new Date('2021-10-23'),
        },
        {
          category: {
            name: 'Components',
          },
          description: 'Goal Dialog v1. Create dialog when click in a goal to expand it information',
          finishDate: new Date('2021-10-23'),
          name: 'Goal Dialog v1',
          startDate: new Date('2021-09-17'),
          status: 'Done',

          updateDate: new Date('2021-10-23'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description:
            'Add context infrastructure to store data and it data can be shared between whole application components',
          finishDate: new Date('2021-09-21'),
          name: 'Context to store data',
          startDate: new Date('2021-09-17'),
          status: 'Done',

          updateDate: new Date('2021-09-21'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: 'Set default font styles as Roboto and apply rem sizes',
          finishDate: new Date('2021-10-31'),
          name: 'Default font Roboto',
          startDate: new Date('2021-10-24'),
          status: 'Done',
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
          },
          description: 'Goal Dialog v2. Add default image',
          finishDate: new Date('2021-11-01'),
          name: 'Goal Dialog v2',
          startDate: new Date('2021-11-01'),
          status: 'Done',
          updateDate: new Date('2021-10-31'),
        },
        {
          category: {
            name: 'Components',
          },
          description: 'Goal v4. Add default image preview',
          finishDate: new Date('2021-11-01'),
          name: 'Goal v4',
          startDate: new Date('2021-11-01'),
          status: 'Done',
          updateDate: new Date('2021-10-31'),
        },
        {
          category: {
            name: 'Components',
          },
          description: 'Milestone v4. Show current milestone status before all categories and goals',
          finishDate: new Date('2021-11-01'),
          name: 'Milestone v4',
          startDate: new Date('2021-11-01'),
          status: 'Done',
          updateDate: new Date('2021-11-01'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: 'Create new scrollbar style and apply it in whole application',
          finishDate: new Date('2021-11-10'),
          name: 'New scrollbar style',
          startDate: new Date('2021-11-10'),
          status: 'Done',
          updateDate: new Date('2021-11-10'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: 'To avoid several problems when execute npm install, we will establish a NodeJs version',
          finishDate: new Date('2021-11-09'),
          name: 'NodeJs version fixed',
          startDate: new Date('2021-11-09'),
          status: 'Done',
          updateDate: new Date('2021-11-09'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: 'Is necessary set the project LICENSE to allow than other users use the component',
          finishDate: new Date('2021-11-10'),
          name: 'Create LICENSE file',
          startDate: new Date('2021-11-10'),
          status: 'Done',
          updateDate: new Date('2021-11-10'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          finishDate: new Date('2021-11-10'),
          description: 'Create readme with instruction to use the Roadmap Milestone component',
          name: 'Readme',
          startDate: new Date('2021-11-10'),
          status: 'Done',
          updateDate: new Date('2021-11-10'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: 'We add store Global Dialog test to check its correct behavior automatically',
          finishDate: new Date('2021-11-11'),
          name: 'Add store test',
          startDate: new Date('2021-11-11'),
          status: 'Done',
          updateDate: new Date('2021-11-11'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description:
            'To improve the speed of application we will added a technical upgrade to load page in lazy mode also we will develop a Loader component to show the load',
          finishDate: new Date('2021-11-11'),
          name: 'Lazy page import',
          startDate: new Date('2021-11-11'),
          status: 'Done',
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
          },
          description: 'Goal Dialog v3. Responsive dialog',
          finishDate: new Date('2021-11-11'),
          name: 'Goal Dialog v3',
          startDate: new Date('2021-11-11'),
          status: 'Done',
          updateDate: new Date('2021-11-11'),
        },
        {
          category: {
            name: 'Components',
          },
          description:
            'Milestone v5. Hide completed milestones, add an option to collapse/expand them and select initial behavior',
          finishDate: new Date('2022-04-06'),
          name: 'Milestone v5',
          status: 'Done',
          updateDate: new Date('2022-04-06'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description:
            'We have to add Breakpoints (mobile and laptop) to handle the way to show components in different sizes depending screen size or device',
          finishDate: new Date('2021-11-11'),
          name: 'Breakpoints and devices',
          startDate: new Date('2021-11-11'),
          status: 'Done',
          updateDate: new Date('2021-11-11'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: 'With translation functionality we can show the principal labels in different languages',
          finishDate: new Date('2022-04-10'),
          name: 'Add translation functionality',
          startDate: new Date('2022-04-09'),
          status: 'Done',
          updateDate: new Date('2022-04-10'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description:
            'Adding all colors to palette theme we get a robust color handling and we will can allow change current styles in the future easier',
          finishDate: new Date('2022-04-10'),
          name: 'Add all color to palette theme',
          status: 'Done',
          updateDate: new Date('2021-11-11'),
        },
      ],
      finishDate: new Date('2022-04-10'),
      name: '0.5',
      startDate: new Date('2021-11-11'),
      status: 'Done',
    },
    {
      goals: [
        {
          category: {
            name: 'Components',
          },
          description:
            'Milestone v6. Title with more space when milestone is collapsed. Add ellipsis if the title is long',
          finishDate: new Date('2023-10-03'),
          name: 'Milestone v6',
          startDate: new Date('2023-10-03'),
          status: 'Done',
          updateDate: new Date('2023-10-03'),
        },
        {
          category: {
            name: 'Components',
          },
          description:
            'Goal v5. Add tags section in goal summary, below goal description, and goal dialog, on the right side below the category. The idea is to be able to allow adding all the tags that you want and shown them',
          finishDate: new Date('2023-10-05'),
          name: 'Goal v5',
          shortDescription: 'Goal v5. Add tags below goal description and in the goal dialog',
          startDate: new Date('2023-10-05'),
          status: 'Done',
          tags: [
            {
              name: 'Improvement',
            },
            {
              name: 'New feature',
            },
          ],
          updateDate: new Date('2023-10-05'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: 'Add and apply eslintrc and prettier airbnb rules to ensure the correct code style',
          finishDate: new Date('2023-01-09'),
          name: 'Add eslintrc and prettier',
          startDate: new Date('2023-01-09'),
          status: 'Done',
          updateDate: new Date('2023-01-09'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description: 'Publish ReactRoadmapMilestone as npm package and do it public for everyone',
          name: 'Publish into npm',
          status: 'Pending',
          updateDate: new Date('2023-01-09'),
        },
      ],
      name: '0.6',
      status: 'Ongoing',
    },
    {
      goals: [
        {
          category: {
            name: 'Components',
          },
          description: 'Goal v6. Add different colors to differentiate between completed and uncompleted goals',
          name: 'Goal v6',
          status: 'Pending',
          updateDate: new Date('2023-01-09'),
        },
        {
          category: {
            name: 'Components',
          },
          description:
            'Milestone v7. Add different colors to differentiate between completed and uncompleted milestones',
          name: 'Milestone v7',
          status: 'Pending',
          updateDate: new Date('2023-01-09'),
        },
        {
          category: {
            name: 'Global components',
          },
          description: 'Create an empty milestones status',
          name: 'Empty milestones status',
          status: 'Pending',
          updateDate: new Date('2023-09-21'),
        },
        {
          category: {
            name: 'Infrastructure',
          },
          description:
            'To ensure the easy use of the component the required types should be a few of them. Also use the import type directive to ensure a mayor documentation',
          name: 'Update types and required values',
          shortDescription: 'To ensure the easy use of the component the required types should be a few of them',
          status: 'Pending',
          updateDate: new Date('2023-09-21'),
        },
      ],
      name: '0.7',
      status: 'Pending',
    },
  ],
}

const theme: ITheme = {
  breakpoints: {
    mobile: 0,
    laptop: 900,
  },
  devices: {
    mobileMin: '(min-width: 0px)',
    laptopMax: '(max-width: 900px)',
    laptopMin: '(min-width: 900px)' },
  palette: {
    background: {
      default: '#0d2635',
    },
    category: {
      background: { default: '#1a5a7f' },
      border: { default: '#3785ae' },
      expandIcon: { default: '#ade1ff' } },
    milestone: {
      background: { default: '#164664' },
      expandIcon: { default: '#ade1ff' },
      finishDate: {
        font: { default: '#ade1ff' },
      },
      status: {
        border: { default: '#3785ae' },
        font: { default: '#ade1ff' },
      },
    },
    oldMilestones: {
      background: { default: '#164664' },
      border: { default: '#296d94' } },
    scrollBar: { default: '#bac1c5', hover: '#949a9d' },
  },
}

const meta = {
  title: 'Components/RoadmapMilestones',
  component: RoadmapMilestones,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    roadmapMilestonesData,
    theme,
  },
} satisfies Meta<typeof RoadmapMilestones>

export default meta
type Story = StoryObj<typeof meta>

export const V1: Story = {
  args: {
  },
}
