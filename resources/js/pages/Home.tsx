import MainLayout from '../layouts/MainLayout';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Home() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    servings: '',
    ingredients: '',
    instructions: '',
    picture: null,
  });

  const { flash } = usePage().props;

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/submit-recipe', {
  forceFormData: true,
});  //laravel route
  }

  return (
    <MainLayout>
      <h1 className="text-[32px] font-bold">Submit your own recipe!</h1>  
      <h2 className="text-[18px]">Submit your recipe online and share with the community</h2>
      &nbsp;

      <div className="flex gap-2">
        <img src="/images/tastydish.jpg" className="h-auto w-70" alt="Dish 1" />
        <img src="/images/tastydish2.jpg" className="h-auto w-90" alt="Dish 2" />
      </div>
      &nbsp;

      <h1 className="text-[20px] font-bold">Recipe details</h1>
      &nbsp;

      <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit} className="flex flex-col gap-4">
      
        <div className="inputDiv">
          <Label className="text-[16px]">Recipe Title</Label>
          <Input
            type="text"
            className="w-[600px]"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
          />
          {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
        </div>

        <div className="inputDiv">
          <Label className="text-[16px]">No. of servings</Label>
          <Input
            type="text"
            className="w-[250px]"
            value={data.servings}
            onChange={(e) => setData('servings', e.target.value)}
          />
        </div>

        <div className="inputDiv">
          <Label className="text-[16px]">Ingredients</Label>
          <textarea
            className="w-[600px] p-3 border border-black rounded resize min-h-[72px] focus:outline-none focus:ring focus:border-blue-500"
            value={data.ingredients}
            onChange={(e) => setData('ingredients', e.target.value)}
            placeholder={`2 cups of milk.\n1 tablespoon of sugar.`}
          />
        </div>

        <div className="inputDiv">
          <Label className="text-[16px]">Recipe Flow</Label>
          <textarea
            className="w-[600px] p-3 border border-black rounded resize min-h-[72px] focus:outline-none focus:ring focus:border-blue-500"
            value={data.instructions}
            onChange={(e) => setData('instructions', e.target.value)}
            placeholder={`A pinch of salt.\n1 tbsp. of honey`}
          />
        </div>

        <div className="inputDiv">
          <Label className="text-[16px]">Recipe Picture</Label>
          <Input
            id="picture"
            type="file"
            className="w-[200px]"
            onChange={(e) => setData('picture', e.target.files[0] || null)}
          />
        </div>

        <Button type="submit" variant="outline" disabled={processing}>
          {processing ? 'Submitting...' : 'SUBMIT YOUR RECIPE'}
        </Button>
      </form>
    </MainLayout>
  );
}