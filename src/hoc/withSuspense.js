import React from "react";

const withSuspense = Component => {
    return<React.Suspense fallback={<div>Идёт загрузка...</div>}>
            <Component/>
        </React.Suspense>
}

export default withSuspense;