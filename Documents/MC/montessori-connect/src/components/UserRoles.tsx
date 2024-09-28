import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export default function UserRoles() {
  const roles = ['Parent', 'School', 'Educators', 'Training Center'];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">I AM A...</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {roles.map((role) => (
            <Card key={role}>
              <CardHeader>
                <h3 className="text-xl font-bold">{role}</h3>
              </CardHeader>
              <CardBody>
                <p>Description for {role}...</p>
              </CardBody>
              <CardFooter>
                <Button color="primary">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
