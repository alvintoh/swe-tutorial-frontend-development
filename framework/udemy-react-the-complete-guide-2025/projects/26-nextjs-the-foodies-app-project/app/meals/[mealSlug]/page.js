export default async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;
  return (
    <main>
      <h1>Meal Details for {mealSlug}</h1>
    </main>
  );
}
