import { InputOTPPattern } from '@/components/InputOTPPattern';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2 items-start">
      <Button>Button</Button>
      <InputOTPPattern />
    </div>
  );
}
