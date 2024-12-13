import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">TuneCapture</h1>
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
            <ul>
                <li>Make a table of recordings</li>
                <li>Add a button to download the radio file</li>
                <li>Add a button to delete the radio file</li>
                <li>Section: How many recordings we have</li>
                <li>Section: What is the lastest recording</li>
                <li>Section: What is the next upcoming recording</li>
                <li>Section: Enable / Disable</li>
                <li>Section: Change CRON? </li>
              </ul>
            </h3>
            <p className="text-sm text-muted-foreground">Add some content!</p>
            <Button className="mt-4">Some Button</Button>
          </div>
        </div>
      </main>
    </>
  );
}
