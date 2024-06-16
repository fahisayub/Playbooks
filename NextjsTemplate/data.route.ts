export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
  });
  const data = await res.json();
  return new Response(JSON.stringify({ data }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 's-maxage=10, stale-while-revalidate',
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  // Process the POST request with the received body
  return new Response(JSON.stringify({ message: 'POST request received', body }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function PUT(request: Request) {
  const body = await request.json();
  // Process the PUT request with the received body
  return new Response(JSON.stringify({ message: 'PUT request received', body }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function PATCH(request: Request) {
  const body = await request.json();
  // Process the PATCH request with the received body
  return new Response(JSON.stringify({ message: 'PATCH request received', body }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function DELETE(request: Request) {
  // Process the DELETE request
  return new Response(JSON.stringify({ message: 'DELETE request received' }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    headers: {
      'Allow': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    },
  });
}

export async function HEAD(request: Request) {
  return new Response(null, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
