import { Button } from "@repo/ui";

export default function Home() {
  return (
    <div className="mx-auto my-10 grid w-[200px] gap-2 p-2">
      <Button>Default Variants</Button>
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
      <Button color="success">Success</Button>
    </div>
  );
}
