import Wrapper from "./Wrapper";
export const AboutPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3 className="title"> About us</h3>
        <p className="text">
          Welcome to iCare! We are a revolutionary service that aims to make
          healthcare more accessible and convenient for both doctors and
          patients.
          <br />
          At iCare, we understand that managing a doctor's schedule can be a
          daunting task. Our platform offers an easy and efficient way for
          doctors to manage their schedules, making it possible for them to
          focus on providing the best possible care to their patients.
          <br /> For patients, iCare provides a hassle-free way to book
          appointments with their doctors. With just a few clicks, patients can
          schedule appointments online, without the need to spend time on the
          phone or waiting in long queues. <br />
          Our team is committed to providing the highest level of service to
          both doctors and patients. We believe that by using technology to
          streamline healthcare processes, we can make a real difference in
          people's lives.
          <br />
          So whether you're a doctor looking for an easier way to manage your
          schedule, or a patient in need of a convenient way to make
          appointments, iCare is here to help. Join us on this exciting journey
          towards better, more accessible healthcare!
        </p>
      </div>
    </Wrapper>
  );
};
