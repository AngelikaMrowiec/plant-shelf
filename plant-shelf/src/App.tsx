import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import EventContextProvider, { EventContext } from "./store/event-context";
import RootLayout from "./pages/RootLayout";
import FormLayout from "./pages/FormLayout";
import ShelfPage from "./pages/ShelfPage";
import GetStartedPage from "./pages/GetStartedPage";
import AddPlantPage, { action as addPlantAction } from "./pages/AddPlantPage";
import EditPlantPage, { action as editAction } from "./pages/EditPlantPage";
import DeletePlantPage, {
  action as deleteAction,
} from "./pages/DeletePlantPage";
import CalendarPage, { action as addEventAction } from "./pages/CalendarPage";
import { useContext } from "react";
import AnimatedLayout from "./pages/AnimatedLayout";

export default function App() {
  return (
    <EventContextProvider>
      <RouterWrapper />
    </EventContextProvider>
  );
}

function RouterWrapper() {
  const eventsContext = useContext(EventContext);
  const hasSeenGreeting = localStorage.getItem("hasSeenGreeting");

  const router = createBrowserRouter([
    {
      index: true,
      element: hasSeenGreeting ? (
        <Navigate to="/shelf" replace />
      ) : (
        <GetStartedPage />
      ),
    },
    {
      element: <AnimatedLayout />,
      children: [
        {
          path: "/",
          element: <RootLayout />,
          // errorElement: <Error />,
          children: [
            {
              path: "shelf",
              children: [
                { index: true, element: <ShelfPage /> },
                {
                  path: "calendar",
                  element: <CalendarPage />,
                  action: async (e) =>
                    await addEventAction({
                      request: e.request,
                      events: eventsContext,
                    }),
                },
              ],
            },
          ],
        },
        {
          element: <FormLayout />,
          children: [
            {
              path: "shelf/add-plant",
              element: <AddPlantPage />,
              action: addPlantAction,
            },
            {
              path: "shelf/edit-plant/:plantId",
              element: <EditPlantPage />,
              action: editAction,
            },
            {
              path: "shelf/delete-plant/:plantId",
              element: <DeletePlantPage />,
              action: deleteAction,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
