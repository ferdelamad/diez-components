# diez-components ⚛
- 🔟(Diez) atomic react components
- 💡Library weight less than ~10KB
## Install
```bash
npm i diez-components
```
## Components
Card, Flex, Grid, Button, Image, Text, Input, Dropdown, Icon
## Props and Usage
diez-components uses styled-system under the hood. Refer to their [docs](https://styled-system.com/api) for props and basic usage.
## Examples
Reponsive grid with two columns
```js
import {
  Flex,
  Card,
  Text,
  Image
} from 'diez-components'

<Flex flexWrap="wrap">
  <Card m={5} width={500}>
    <Card
      width={[1/2, 1]}
      borderRadius={5}
      boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
      <Image
        src="https://lunaticpsyche.files.wordpress.com/2013/11/random-pic-01.jpg"
      />
      <Card px={2}>
        <Text fontSize={4} fontWeight="bold">
          Title
        </Text>
        <Text fontSize={0}>
          Small size sample text
        </Text>
      </Card>
    </Card>
  </Card>
  <Card m={5} width={500}>
    <Card
      width={[1/2, 1]}
      borderRadius={5}
      boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
      <Image
        src="https://lunaticpsyche.files.wordpress.com/2013/11/random-pic-01.jpg"
      />
      <Card px={2}>
        <Text fontSize={4} fontWeight="bold">
          Title
        </Text>
        <Text fontSize={0}>
          Small size sample text
        </Text>
      </Card>
    </Card>
  </Card>
</Flex>
```
