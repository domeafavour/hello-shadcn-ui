import { InputOTPPattern } from '@/components/InputOTPPattern';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export default function HomePage() {
  // Why `shouldScaleBackground` doesn't work and how to resolve it.
  //
  // https://github.com/emilkowalski/vaul?tab=readme-ov-file#api-reference
  // https://github.com/shadcn-ui/ui/pull/2403
  //
  // <div vaul-drawer-wrapper> is not working as expected.
  return (
    <div vaul-drawer-wrapper="">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col gap-2 items-start">
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Drawer</DrawerTitle>
                <DrawerDescription>description</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <Button>Button</Button>
                <InputOTPPattern />
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
