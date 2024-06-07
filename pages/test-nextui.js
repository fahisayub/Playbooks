import { Button, Card, Text } from '@nextui-org/react';

const TestNextUI = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <Card.Body>
          <Text h1>NextUI Test Page</Text>
          <Text>This is a test page to verify NextUI components.</Text>
          <Button>Click Me</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestNextUI;
