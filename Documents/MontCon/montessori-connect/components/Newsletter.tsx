import { Button, Input } from "@nextui-org/react";

export function Newsletter() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex-1 mr-8">
          <h2 className="text-2xl font-bold mb-4">Get Regular Updates from MontessoriConnect</h2>
          <p>Subscribe to Newsletter</p>
        </div>
        <div className="flex-1">
          <div className="flex">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-grow mr-2"
            />
            <Button color="primary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
