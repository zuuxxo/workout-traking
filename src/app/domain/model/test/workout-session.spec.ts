import {Workout} from '../workout';
import {WorkoutSession} from '../workout-session';


describe('WorkoutSession', () => {
  describe('buildWorkoutFromWorkoutModel', () => {
    it('should build a workout from a workout model', () => {
      const workoutModel = {
        title:        'Test Workout',
        objectifs:    {
          weight: 100,
          reps:   10,
          rest:   60,
        },
        seriesNumber: 3,
      };
      const workout      = Workout.buildWorkoutFromWorkoutModel(workoutModel);
      expect(workout.title).toBe('Test Workout');
      expect(workout.series.length).toBe(3);
      expect(workout.series[0]).toEqual({
                                          weight: 100,
                                          reps:   0,
                                          rest:   60,
                                        });

    });
  });
  describe('builWorkoutSessionFromWorkoutSessionModel', () => {
    it('should build a workoutSession from a workout Session model', () => {
      const workoutModelSession = {
        title:        'Seance Push',
        id:           'jdzlkdjzhdqjd-dzzljdzlkd',
        workouts:     [
          {
            title:        'Développé couché',
            seriesNumber: 3,
            objectifs:    {
              rest: 12, reps: 30, weight: 0
            }
          },
          {
            title:        'Développé incline',
            seriesNumber: 5,
            objectifs:    {
              rest: 12, reps: 30, weight: 0
            }
          }, {
            title:        'Développé decliné',
            seriesNumber: 3,
            objectifs:    {
              rest: 12, reps: 30, weight: 0
            }
          }],
        creationDate: new Date(),
        comments:     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi aut beatae consectetur ducimus expedita explicabo hic itaque magni nostrum numquam placeat, porro, repellat tempore. In neque nesciunt non.'
      };
      const workoutSession      = new WorkoutSession(workoutModelSession);
      expect(workoutSession.title).toBe(`workout session Seance Push`);
      expect(workoutSession.workouts.length).toBe(3);
      expect(workoutSession.workouts[0]).toEqual({
                                                   title:     'Développé couché',
                                                   series:    [
                                                     {
                                                       rest: 12, reps: 0, weight: 0
                                                     },
                                                     {
                                                       rest: 12, reps: 0, weight: 0
                                                     }, {
                                                       rest: 12, reps: 0, weight: 0
                                                     }
                                                   ],
                                                   comments:  null,
                                                   objectifs: {
                                                     rest: 12, reps: 30, weight: 0
                                                   }
                                                 });

    });
  });
});



