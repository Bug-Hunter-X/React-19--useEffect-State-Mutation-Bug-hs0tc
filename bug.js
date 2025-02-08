```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Directly setting count without using setCount
    count = count + 1; 
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```