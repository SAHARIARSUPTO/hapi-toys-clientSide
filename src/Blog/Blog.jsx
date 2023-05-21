

const Blog = () => {
    return (
        <div>
            <p className="text-center font-bold text-5xl">Our Blog Site</p>

            <div className="container  py-10 px-5">
      <div className="space-y-8">
        <div className="text-black font-bold">
          <p className="text-lg">1. What is an access token and refresh token?</p>
        </div>
        <div className="text-gray-600">
          <p className="text-lg">An access token is a credential used to access protected resources on an API. It is typically obtained after successfully authenticating with valid credentials. Access tokens have a limited lifespan and are used to authorize requests.</p>
        </div>

        <div className="text-black font-bold">
          <p className="text-lg">2. Compare SQL and NoSQL databases?</p>
        </div>
        <div className="text-gray-600">
          <p className="text-lg">SQL databases are relational databases that store data in tables with predefined schemas. They provide ACID (Atomicity, Consistency, Isolation, Durability) compliance and are suitable for structured data and complex relationships. NoSQL databases, on the other hand, are non-relational databases that store data in flexible formats like key-value pairs, documents, or graphs. They offer high scalability, flexibility, and are suitable for unstructured or semi-structured data.</p>
        </div>

        <div className="text-black font-bold">
          <p className="text-lg">3. What is Express.js? What is Nest.js?</p>
        </div>
        <div className="text-gray-600">
          <p className="text-lg">Express.js is a popular web application framework for Node.js. It provides a minimalist and flexible approach to building web servers and APIs. It is widely used for its simplicity and extensive middleware ecosystem.</p>
          <p className="text-lg">Nest.js is a progressive Node.js framework built with TypeScript. It combines elements of object-oriented programming, functional programming, and metaprogramming. Nest.js provides a structured and scalable architecture for building server-side applications.</p>
        </div>

        <div className="text-black font-bold">
          <p className="text-lg">4. What is MongoDB aggregate and how does it work?</p>
        </div>
        <div className="text-gray-600">
          <p className="text-lg">MongoDBs aggregate is a powerful framework for data aggregation and analysis. It allows you to perform complex operations on documents in a collection, such as filtering, grouping, sorting, and transforming data. Aggregation pipelines consist of multiple stages that process documents sequentially, enabling you to manipulate and analyze data in a flexible and efficient way.</p>
        </div>
      </div>
    </div>



        </div>
    );
};

export default Blog;