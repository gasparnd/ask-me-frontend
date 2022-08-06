import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import CoverMock from "../../../../public/images/cover-mock.jpg";
import ProfileMock from "../../../../public/images/profile-mock.png";
import { QuestionList } from "../../QuestionList";
import { UserHeader } from "../../UserHeader";
import { CreateQuestion } from "../../From";
import { GetUserByNikname } from "../../../api";

export const UserPage: NextPage = () => {
  const router = useRouter();
  const { user } = router.query;

  const [ask, setAsk] = useState<{ ask: string; name?: string }>({
    ask: "",
    name: "",
  });

  useEffect(() => {
    GetUserByNikname("gasparnd")?.then((res) => console.log(res));
  }, []);

  return (
    <section className="min-h-screen">
      <section className="rounded-lg bg-cardBackground h-3/5">
        <UserHeader
          user={user?.toString()}
          cover={CoverMock}
          profilePic={ProfileMock}
        />

        <CreateQuestion ask={ask} setAsk={setAsk} />
      </section>

      <section className="mt-8">
        <QuestionList />
      </section>
    </section>
  );
};
