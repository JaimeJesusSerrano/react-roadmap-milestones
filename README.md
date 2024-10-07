# React Roadmap Milestones

## How use it 
Add and use this component in your project. Example of use:
- [Repository example](https://github.com/JaimeJesusSerrano/react-roadmap-milestones-example)
- [Web example](https://react-roadmap-milestones-example.vercel.app/roadmap)

## Description
The React Roadmap Milestones component is a board with a lot of features, functionalities or whatever where a user can see all of them divided by categories and milestones.

Several examples than can help us to understand it:
- **Cookbook**: maybe you what add recipes of different categories and you what show it by milestones as timeline or book version.
- **Video game**: where we can see the different features (deployed, in development or to be develop) in several milestones as a timeline.
- **Software project** like this component. Yes, use this component to explain the evolution of himself.
- Definitely **The evolution of any project or idea to be showed by milestones**.

## Usage

### Basic example
```javascript
  import { ReactRoadmapMilestones, type IReactRoadmapMilestones } from '@jaimejesusserrano/react-roadmap-milestones'

  const roadmapMilestonesData: IReactRoadmapMilestones = {
    milestones: [
      {
        name: '0.1',
        status: 'pending',
        goals: [
          {
            name: 'Goal 1',
            description: 'Goal description',
            shortDescription: 'Short goal description',
            status: 'pending',
            updateDate: new Date(),
          }
        ],
      }
    ],
    name: 'Example',
  }

  return (
    <div style={{height: 600, width: 1000}}>
      <ReactRoadmapMilestones roadmapMilestonesData={roadmapMilestonesData} />
    </div>
  )
```

### Override CSS
React Roadmap Milestones provides its own CSS styles but you can override them. You can modify the theme that include the color palette, breakpoints and devices or you can modify the entire CSS styles, as you prefer.

```javascript
  import { ReactRoadmapMilestones, type IReactRoadmapMilestones, type ITheme } from '@jaimejesusserrano/react-roadmap-milestones'

  const roadmapMilestonesData: IReactRoadmapMilestones = {
    milestones: [
      {
        name: '0.1',
        status: 'pending',
        goals: [
          {
            name: 'Goal 1',
            description: 'Goal description',
            shortDescription: 'Short goal description',
            status: 'pending',
            updateDate: new Date(),
          }
        ],
      }
    ],
    name: 'Example',
  }

  const className = 'my-custom-className'
  const theme: ITheme = {}

  return (
    <div style={{height: 600, width: 1000}}>
      <ReactRoadmapMilestones className={className} theme={theme} roadmapMilestonesData={roadmapMilestonesData} />
    </div>
  )
```

## Future ideas to be developed (suggestions are accepted)
- ~~Overwrite styles, to allow config your own CSS.~~

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the component.

## To update the package in NPM
npm publish