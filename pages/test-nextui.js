import { Button, Card } from '@nextui-org/react';

const TestNextUI = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <Card.Body>
          <h1>NextUI Test Page</h1>
          <p>This is a test page to verify NextUI components.</p>
          <Button>Click Me</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestNextUI;
